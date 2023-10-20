function logout() {
    window.open("../../index.html");
}

// this function runs when the document is loaded and ready
$(document).ready(function () {

    // initialize static data
    var targetTime = undefined; // the target time for the timer to reach
    var targetDelta = undefined; // the time remaining until the target time
    var intervalId = undefined; // the ID of the interval timer
    var reset = true; // whether the timer has been reset
    var onSession = true; // whether the timer is currently running on session time
    var mute = false; // whether the sound is muted
    var breakLength; // the length of the break in seconds

    // this function sets up the timer display
    function setupTimerDisplay() {
        var config = {};
        var value = 0;

        // if the timer is currently running on session time
        if (onSession === true) {
            value = $('#session-knob').val() * 60; // set the timer value to the session length in seconds
            $('#timer-display').val(value); // set the timer display to the session length
            config.max = value; // set the maximum value of the timer to the session length
            config.fgColor = '#6C6'; // set the foreground color of the timer to green
            config.inputColor = '#6C6'; // set the input color of the timer to green
            config.format = function (v) { // set the timer display format to show minutes and seconds
                var sec = parseInt(v);
                var min = Math.floor(sec / 60);
                sec -= min * 60;
                return min + ':' + (sec < 10 ? "0" + sec : sec);
            };
        }
        // if the timer is currently running on break time
        else {
            var max = $('#break-knob').val() * 60; // set the maximum value of the timer to the break length in seconds
            config.max = max;
            config.fgColor = '#C66'; // set the foreground color of the timer to red
            config.inputColor = '#C66'; // set the input color of the timer to red
            config.format = function (v) { // set the timer display format to show minutes and seconds
                var sec = parseInt(v);
                sec = max - sec;
                var min = Math.floor(sec / 60);
                sec -= min * 60;
                return min + ':' + (sec < 10 ? "0" + sec : sec);
            };
        }

        // configure and update the timer display with the new settings
        $('#timer-display').trigger('configure', config);
        $('#timer-display').val(value);
        $('#timer-display').trigger('change');
    }

    // if the jQuery knob plugin is available, use it to create the timer controls
    if (jQuery().knob) {
        $('#session-knob').knob({
            'min': 0,
            'max': 120,
            'step': 1,
            'width': 100,
            'height': 100,
            'fgColor': '#6C6',
            'bgColor': '#333',
            'release': function () { // when the session knob is released, set the new target time and update the timer display
                if (reset) {
                    targetDelta = $('#session-knob').val() * 60000;
                    setupTimerDisplay();
                }
            }
        });

        $('#break-knob').knob({
            'min': 0,
            'max': 30,
            'step': 1,
            'width': 100,
            'height': 100,
            'fgColor': '#C66',
            'bgColor': '#333'
        });

        $('#timer-display').knob({
            'min': 0,
            'max': 1500,
            'width': 200,
            'height': 200,
            'rotation': 'anticlockwise',
            'fgColor': '#57C',
            'bgColor': '#222',
            'readOnly': true
        });
    }

    // this function is called periodically to update the timer display
    function updateTimer() {
        var now = new Date();
        targetDelta = targetTime.getTime() - now.getTime(); // calculate the time remaining until the target time

        // if the target time has not been reached yet
        if (targetDelta > 0) {
            var sec = Math.ceil(targetDelta / 1000);
            if (!onSession) sec = breakLength - sec;
            $('#timer-display').val(sec);
            $('#timer-display').trigger('change');
        }
        // if the target time has been reached
        else {
            // if the timer was running on session time
            if (onSession) {
                if (!mute) $('#snd-endofsession')[0].play(); // play the end of session sound effect if not muted
                onSession = false; // switch to break time
                breakLength = $('#break-knob').val() * 60; // set the break length in seconds
                targetDelta = breakLength * 1000; // set the new target time to the end of the break
            }
            // if the timer was running on break time
            else {
                if (!mute) $('#snd-endofbreak')[0].play(); // play the end of break sound effect if not muted
                onSession = true; // switch to session time
                targetDelta = $('#session-knob').val() * 60000; // set the new target time to the end of the session
            }
            targetTime = new Date(Date.now() + targetDelta); // set the new target time
            setupTimerDisplay(); // update the timer display
        }
    }

    // event handlers for the timer control buttons
    $('#cmd-reset').click(function () {
        targetDelta = $('#session-knob').val() * 60000; // set the target time to the end of the session
        if (intervalId) {
            window.clearInterval(intervalId); // clear the interval timer if it's running
            intervalId = undefined;
        }
        reset = true; // set the timer to reset
        onSession = true; // set the timer to session time
        $('#cmd-pause').addClass('hidden'); // hide the pause button
        $('#cmd-go').removeClass('hidden'); // show the go button
        setupTimerDisplay(); // update the timer display
        return false;
    });

    $('#cmd-go').click(function () {
        targetTime = new Date(Date.now() + targetDelta); // set the target time to the current time plus the time remaining
        intervalId = window.setInterval(updateTimer, 200); // start the interval timer to update the timer display periodically
        reset = false; // set the timer to not reset
        breakLength = $('#break-knob').val() * 60; // set the break length in seconds
        $('#cmd-go').addClass('hidden'); // hide the go button
        $('#cmd-pause').removeClass('hidden'); // show the pause button
        return false;
    });

    $('#cmd-pause').click(function () {
        window.clearInterval(intervalId); // clear the interval timer
        intervalId = undefined;
        $('#cmd-pause').addClass('hidden'); // hide the pause button
        $('#cmd-go').removeClass('hidden'); // show the go button
        return false;
    });

    // event handlers for the mute button
    $('#cmd-mute').click(function () {
        mute = true; // set the sound to be muted
        $('#cmd-mute').addClass('hidden'); // hide the mute button
        $('#cmd-unmute').removeClass('hidden'); // show the unmute button
        return false;
    });

    $('#cmd-unmute').click(function () {
        mute = false; // set the sound to not be muted
        $('#cmd-unmute').addClass('hidden'); // hide the unmute button
        $('#cmd-mute').removeClass('hidden'); // show the mute button
        return false;
    });

    // initialize the timer display
    targetDelta = $('#session-knob').val() * 60000; // set the target time to the end of the session
    setupTimerDisplay();

    // hide the mute button if the audio element is not supported
    if (!$('#snd-endofbreak')[0].play) {
        mute = true;
        $('#cmd-mute').addClass('hidden');
    }
});
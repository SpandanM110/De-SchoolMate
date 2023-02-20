$(document).ready(function () {

    // initialize static data
    var targetTime = undefined;
    var targetDelta = undefined;
    var intervalId = undefined;
    var reset = true;
    var onSession = true;
    var mute = false;
    var breakLength;

    

    // main timer setup function
    function setupTimerDisplay() {
        var config = {};
        var value = 0;

        if (onSession === true) {
            value = $('#session-knob').val() * 60;
            $('#timer-display').val(value);
            config.max = value;
            config.fgColor = '#6C6';
            config.inputColor = '#6C6';
            config.format = function (v) {
                var sec = parseInt(v);
                var min = Math.floor(sec / 60);
                sec -= min * 60;
                return min + ':' + (sec < 10 ? "0" + sec : sec);
            };
        }
        else {
            var max = $('#break-knob').val() * 60;
            config.max = max;
            config.fgColor = '#C66';
            config.inputColor = '#C66';
            config.format = function (v) {
                var sec = parseInt(v);
                sec = max - sec;
                var min = Math.floor(sec / 60);
                sec -= min * 60;
                return min + ':' + (sec < 10 ? "0" + sec : sec);
            };
        }

        $('#timer-display').trigger('configure', config);
        $('#timer-display').val(value);
        $('#timer-display').trigger('change');
    }

    // if knob failed to load, fall back to regular input display
    if (jQuery().knob) {
        $('#session-knob').knob({
            'min': 0,
            'max': 120,
            'step': 1,
            'width': 100,
            'height': 100,
            'fgColor': '#6C6',
            'bgColor': '#333',
            'release': function () {
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

    // periodic timer function
    function updateTimer() {
        var now = new Date();
        targetDelta = targetTime.getTime() - now.getTime();

        if (targetDelta > 0) {
            var sec = Math.ceil(targetDelta / 1000);
            if (!onSession) sec = breakLength - sec;
            $('#timer-display').val(sec);
            $('#timer-display').trigger('change');
        }
        else {
            if (onSession) {
                if (!mute) $('#snd-endofsession')[0].play();
                onSession = false;
                breakLength = $('#break-knob').val() * 60;
                targetDelta = breakLength * 1000;
            }
            else {
                if (!mute) $('#snd-endofbreak')[0].play();
                onSession = true;
                targetDelta = $('#session-knob').val() * 60000;
            }
            targetTime = new Date(Date.now() + targetDelta);
            setupTimerDisplay();
        }
    }

    // button click events
    $('#cmd-reset').click(function () {
        targetDelta = $('#session-knob').val() * 60000;
        if (intervalId) {
            window.clearInterval(intervalId);
            intervalId = undefined;
        }
        reset = true;
        onSession = true;
        $('#cmd-pause').addClass('hidden');
        $('#cmd-go').removeClass('hidden');
        setupTimerDisplay();
        return false;
    });

    $('#cmd-go').click(function () {
        targetTime = new Date(Date.now() + targetDelta);
        intervalId = window.setInterval(updateTimer, 200);
        reset = false;
        breakLength = $('#break-knob').val() * 60;
        $('#cmd-go').addClass('hidden');
        $('#cmd-pause').removeClass('hidden');
        return false;
    });

    $('#cmd-pause').click(function () {
        window.clearInterval(intervalId);
        intervalId = undefined;
        $('#cmd-pause').addClass('hidden');
        $('#cmd-go').removeClass('hidden');
        return false;
    });

    // mute button click events
    $('#cmd-mute').click(function () {
        mute = true;
        $('#cmd-mute').addClass('hidden');
        $('#cmd-unmute').removeClass('hidden');
        return false;
    });

    $('#cmd-unmute').click(function () {
        mute = false;
        $('#cmd-unmute').addClass('hidden');
        $('#cmd-mute').removeClass('hidden');
        return false;
    });

    // initialize timer display
    targetDelta = $('#session-knob').val() * 60000;
    setupTimerDisplay();

    // if the audio element is not supported, hide mute button
    if (!$('#snd-endofbreak')[0].play) {
        mute = true;
        $('#cmd-mute').addClass('hidden');
    }
});
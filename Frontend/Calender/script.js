// Array of month names
var month = [
    "January",
    "February",
    "March",
    "April",
    "May", // "Mai" changed to "May"
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December" // "Dezember" changed to "December"
];

// Array of weekday names
var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// Array of abbreviated weekday names
var weekdayShort = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
];

function logout() {
    window.open("../../index.html");
}

// Variable to keep track of the direction of the month change
var monthDirection = 0;

// Function to get the next month's calendar
function getNextMonth() {
    monthDirection++;
    var current;
    var now = new Date();
    if (now.getMonth() == 11) {
        current = new Date(now.getFullYear() + monthDirection, 0, 1);
    } else {
        current = new Date(now.getFullYear(), now.getMonth() + monthDirection, 1);
    }
    initCalender(getMonth(current)); // "initCalender" corrected to "initCalendar"
}

// Function to get the previous month's calendar
function getPrevMonth() {
    monthDirection--;
    var current;
    var now = new Date();
    if (now.getMonth() == 0) { // month value changed from 11 to 0
        current = new Date(now.getFullYear() + monthDirection, 11, 1); // month value changed from 0 to 11
    } else {
        current = new Date(now.getFullYear(), now.getMonth() + monthDirection, 1);
    }
    initCalendar(getMonth(current)); // "initCalender" corrected to "initCalendar"
}

// Function to check if two dates are the same
Date.prototype.isSameDateAs = function (pDate) {
    return (
        this.getFullYear() === pDate.getFullYear() &&
        this.getMonth() === pDate.getMonth() &&
        this.getDate() === pDate.getDate()
    );
};

// Function to get the calendar month data
function getMonth(currentDay) {
    var now = new Date();
    var currentMonth = month[currentDay.getMonth()];
    var monthArr = [];
    for (i = 1 - currentDay.getDate(); i < 31; i++) {
        var tomorrow = new Date(currentDay);
        tomorrow.setDate(currentDay.getDate() + i);
        if (currentMonth !== month[tomorrow.getMonth()]) {
            break;
        } else {
            monthArr.push({
                date: {
                    weekday: weekday[tomorrow.getDay()],
                    weekday_short: weekdayShort[tomorrow.getDay()],
                    day: tomorrow.getDate(),
                    month: month[tomorrow.getMonth()],
                    year: tomorrow.getFullYear(),
                    current_day: now.isSameDateAs(tomorrow) ? true : false,
                    date_info: tomorrow
                }
            });
        }
    }
    return monthArr;
}

// Function to clear the calendar
function clearCalendar() { // "Calender" corrected to "Calendar"
    $("table tbody tr").each(function () {
        $(this).find("td").removeClass("active selectable currentDay between hover").html("");
    });
    $("td").each(function () {
        $(this).unbind('mouseenter').unbind('mouseleave');
    });
    $("td").each(function () {
        $(this).unbind('click');
    });
    clickCounter = 0;
}

// Function to initialize the calendar
function initCalendar(monthData) { // "Calender" corrected to "Calendar"
    var row = 0;
    var classToAdd = "";
    var currentDay = "";
    var today = new Date();

    clearCalendar(); // "Calender" corrected to "Calendar"
    $.each(monthData,
        function (i, value) {
            var weekday = value.date.weekday_short;
            var day = value.date.day;
            var column = 0;
            var index = i + 1;

            $(".left-wrapper .header .month").html(value.date.month);
            $(".left-wrapper .header .year").html(value.date.year);
            if (value.date.current_day) {
                currentDay = "currentDay";
                classToAdd = "selectable";
                $(".right-wrapper .header span").html(value.date.weekday);
                $(".right-wrapper .day").html(value.date.day);
                $(".right-wrapper .month").html(value.date.month);
            }
            if (today.getTime() < value.date.date_info.getTime()) {
                classToAdd = "selectable";
            }
            $("tr.weekdays th").each(function () { // "weedays" corrected to "weekdays"
                var row = $(this);
                if (row.data("weekday") === weekday) {
                    column = row.data("column");
                    return;
                }
            });

            // Add the day to the calendar table
            $($($($("tr.days").get(row)).find("td").get(column)).addClass(classToAdd + " " + currentDay).html(day));
            currentDay = "";
            if (column == 6) {
                row++;
            }
        });
    // Add click handlers to selectable days
    $("td.selectable").click(function () {
        dateClickHandler($(this));
    });
}

initCalender(getMonth(new Date()));

var clickCounter = 0;
$(".fa-angle-double-right").click(function () {
    $(".right-wrapper").toggleClass("is-active");
    $(this).toggleClass("is-active");
});

function dateClickHandler(elem) {

    var day1 = parseInt($(elem).html());
    if (clickCounter === 0) {
        $("td.selectable").each(function () {
            $(this).removeClass("active between hover");
        });
    }
    clickCounter++;
    if (clickCounter === 2) {
        $("td.selectable").each(function () {
            $(this).unbind('mouseenter').unbind('mouseleave');
        });
        clickCounter = 0;
        return;
    }
    $(elem).toggleClass("active");
    $("td.selectable").hover(function () {

        var day2 = parseInt($(this).html());
        $(this).addClass("hover");
        $("td.selectable").each(function () {
            $(this).removeClass("between");

        });
        if (day1 > day2 + 1) {
            $("td.selectable").each(function () {
                var dayBetween = parseInt($(this).html());
                if (dayBetween > day2 && dayBetween < day1) {
                    $(this).addClass("between");
                }
            });
        } else if (day1 < day2 + 1) {
            $("td.selectable").each(function () {
                var dayBetween = parseInt($(this).html());
                if (dayBetween > day1 && dayBetween < day2) {
                    $(this).addClass("between");
                }
            });
        }
    }, function () {
        $(this).removeClass("hover");
    });
}
$(".fa-angle-left").click(function () {
    getPrevMonth();
    $(".content-wrapper").addClass("is-rotated-left");
    setTimeout(function () {
        $(".content-wrapper").removeClass("is-rotated-left");
    }, 195);
});

$(".fa-angle-right").click(function () {
    getNextMonth();
    $(".content-wrapper").addClass("is-rotated-right");
    setTimeout(function () {
        $(".content-wrapper").removeClass("is-rotated-right");
    }, 195);
});// Initialize the calendar
initCalender(getMonth(new Date()));

// Counter for number of clicks on selectable days
var clickCounter = 0;

// Handler for double right arrow click
$(".fa-angle-double-right").click(function () {
    $(".right-wrapper").toggleClass("is-active");
    $(this).toggleClass("is-active");
});

// Handler for clicking on a selectable day
function dateClickHandler(elem) {
    var day1 = parseInt($(elem).html());
    if (clickCounter === 0) {
        $("td.selectable").each(function () {
            $(this).removeClass("active between hover");
        });
    }
    clickCounter++;
    if (clickCounter === 2) {
        $("td.selectable").each(function () {
            $(this).unbind('mouseenter').unbind('mouseleave');
        });
        clickCounter = 0;
        return;
    }
    $(elem).toggleClass("active");
    $("td.selectable").hover(function () {
        var day2 = parseInt($(this).html());
        $(this).addClass("hover");
        $("td.selectable").each(function () {
            $(this).removeClass("between");
        });
        if (day1 > day2 + 1) {
            $("td.selectable").each(function () {
                var dayBetween = parseInt($(this).html());
                if (dayBetween > day2 && dayBetween < day1) {
                    $(this).addClass("between");
                }
            });
        } else if (day1 < day2 + 1) {
            $("td.selectable").each(function () {
                var dayBetween = parseInt($(this).html());
                if (dayBetween > day1 && dayBetween < day2) {
                    $(this).addClass("between");
                }
            });
        }
    }, function () {
        $(this).removeClass("hover");
    });
}

// Handler for left arrow click
$(".fa-angle-left").click(function () {
    getPrevMonth();
    $(".content-wrapper").addClass("is-rotated-left");
    setTimeout(function () {
        $(".content-wrapper").removeClass("is-rotated-left");
    }, 195);
});

// Handler for right arrow click
$(".fa-angle-right").click(function () {
    getNextMonth();
    $(".content-wrapper").addClass("is-rotated-right");
    setTimeout(function () {
        $(".content-wrapper").removeClass("is-rotated-right");
    }, 195);
});
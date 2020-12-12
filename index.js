"use strict";
/**
 * @desc dateFormat
 */
function dateFormat(date = new Date(), formated = "yyyy-MM-dd") {
    let currentDate = new Date(date);
    let options = {
        "y+": currentDate.getFullYear().toString(), // year
        "M+": (currentDate.getMonth() + 1).toString(), // month
        "d+": currentDate.getDate().toString(), // day
        "h+": currentDate.getHours().toString(), // hour
        "m+": currentDate.getMinutes().toString(), // minute
        "s+": currentDate.getSeconds().toString() // second
    };
    for (let k in options) {
        let ret = new RegExp("(" + k + ")").exec(formated);
        if (ret) {
            formated = formated.replace(
                ret[1],
                ret[1].length == 1
                    ? options[k]
                    : options[k].padStart(ret[1].length, "0")
            );
        }
    }
    return formated;
}

/**
 * @desc getQuarter
 */
function getQuarter(date = new Date()) {
    let month = new Date(date).getMonth();
    if (month < 3) {
        return 1;
    } else if (month < 6) {
        return 2;
    } else if (month < 9) {
        return 3;
    } else if (month < 12) {
        return 4;
    }
}

/**
 * @desc Get the first day of the month
 */
function getMonthFirstDay(date = new Date(), formated = "yyyy-MM-dd") {
    let currentDate = new Date(date);
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    return dateFormat(new Date(year, month, 1), formated);
}

/**
 * @desc Get the last day of the month
 */
function getMonthLastDay(date = new Date(), formated = "yyyy-MM-dd") {
    let currentDate = new Date(date);
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    return dateFormat(new Date(year, month + 1, 0), formated);
}

/**
 * @desc Get days of the month
 */
function getMonthDays(date = new Date()) {
    let currentDate = dateFormat(new Date(date));
    return new Date(
        currentDate.split("-")[0],
        currentDate.split("-")[1],
        0
    ).getDate();
}

/**
 * @desc Get array of the first day of month and the last day of month
 */
function getMonthDateArr(date = new Date(), formated = "yyyy-MM-dd") {
    return [getMonthFirstDay(date, formated), getMonthLastDay(date, formated)];
}

/**
 * @desc Get array of the date of a few days ago and now
 */
function getDateArr(step = 6, formated = "yyyy-MM-dd") {
    let now = new Date();
    let endTime = now.getTime();
    let startTime = endTime - 3600 * 1000 * 24 * step;
    return [dateFormat(startTime, formated), dateFormat(endTime, formated)];
}

let formatter = {
    getQuarter,
    dateFormat,
    getMonthFirstDay,
    getMonthLastDay,
    getMonthDays,
    getMonthDateArr,
    getDateArr
};

module.exports = formatter;

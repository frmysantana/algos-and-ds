/**
 * https://www.codewars.com/kata/52dd673c80db65531e000488
 * 
 * In the United States, one of the most important days of the year is colloquially known as "Black Friday". 
 * On this day, millions of pilgrims sojourn to their local centers of capitalism to stand in long lines and 
 * trade currency for flat-screen TVs and two-dollar DVDs.
 * 
 * Black Friday—so-called because on this day some retailers' accounting books move from "the red" 
 * (having net losses) to "the black" (having net profits)—is traditionally celebrated on the day immediately 
 * following the American Thanksgiving holiday, which always falls on the fourth Thursday in November.
 * 
 * You have recently been hired by a large boat retailer, Beast Bouy, who wants to know exactly what date 
 * they can expect shoppers to crowd their store and purchase their stocks of moderately discounted jet-skis. 
 * Your first task at this job is create a blackFriday function which accepts an integer year, and returns 
 * the day of the month of November that Black Friday falls on in that year. Your function only needs to support 
 * years after 1752*.
 */

/*
- nov 1 is 305th day in non leap year - 4 days ahead
- it is 306th day in leap year - 5 days ahead
jan 1 1752 was a Saturday
1752 was a leap year - 366 days

1. use modulo operation to find first day of the year in the year in question
2. use another modulo operation to find the first day of november for that year
3. derive the 4th Friday of that year (or 5th if nov 1 was a Friday)

time: O(n)
space: O(1)
*/
function findNumberOfLeapYears(year) {
    let count = 1;
    for (let i = 1753; i <= year; i++) {
        if (isThisLeapYear(i)) {
            count++;
        }
    }

    return count;
}

function blackFriday(year) {
    // modulo to find the 1st day of year in question
    const howManyLeapYears = findNumberOfLeapYears(year);
    const firstDayOfYear = ((year - 1752) * 365 + howManyLeapYears) % 7;

    // use another modulo operation to find the first day of november for that year
    const novemberFirstDay = isThisLeapYear() ? firstDayOfYear + 5 : firstDayOfYear + 4;
    // mistake is above
    const novFirst = calendarDays[novemberFirstDay % 7];

    console.log({ year, howManyLeapYears, firstDayOfYear, novemberFirstDay, novFirst });
    // derive the 4th Friday of that year (or 5th if nov 1 was a Friday)
    return blackFridayFromNovemberFirst[novFirst];
}

// how is this the right mapping????
const calendarDays = {
    1: 'Saturday',
    2: 'Sunday',
    3: 'Monday',
    4: 'Tuesday',
    5: 'Wednesday',
    6: 'Thursday',
    0: 'Friday',
};

const blackFridayFromNovemberFirst = {
    "Friday": 29,
    "Thursday": 23,
    "Wednesday": 24,
    "Tuesday": 25,
    "Monday": 26,
    "Sunday": 27,
    "Saturday": 28
};

function isThisLeapYear(year) {
    const divByFour = year % 4 == 0;
    const divBy100 = year % 100 == 0;
    const divBy400 = year % 400 == 0;

    if (divBy400) {
        return true;
    } else if (divBy100) {
        return false;
    } else {
        return divByFour;
    }
}
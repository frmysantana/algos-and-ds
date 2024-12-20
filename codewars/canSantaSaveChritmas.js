/**
 * https://www.codewars.com/kata/5857e8bb9948644aa1000246
 * 
 * You will get an array as input with time durations as string in the following format: HH:MM:SS. 
 * Each duration represents the time taken by Santa to deliver a present. 
 * Determine whether he can do it in 24 hours or not. In case the time required to deliver all of 
 * the presents is exactly 24 hours, Santa can complete the delivery.
 */

function determineTime(durations) {
  /*
  - split each date string on : and convert the string into hours 
  - save up to 6 decimal places
  - sum all of the hours and compare if less than 24
  
  - time: O(n)
  - space: O(1)
  */
  const totalTime = durations.reduce((acc, curr) => {
    const [hour, min, sec] = curr.split(':');
    const totalHours = +hour + +min / 60 + +sec / 3600;

    return acc + totalHours;
  }, 0)

  return totalTime <= 24;
}
/*
  Author: Fremy Santana
  
  Your company built an in-house calendar tool called HiCal. 
  You want to add a feature to see the times in a day when everyone is available.

  To do this, you’ll need to know when any team is having a meeting. 
  In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. 
  These integers represent the number of 30-minute blocks past 9:00am.

  Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

  Do not assume the meetings are in order. The meeting times are coming from multiple teams.

  Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. 
  Here we've simplified our times down to the number of 30-minute slots past 9:00 am. 
  But we want the function to work even for very large numbers, like Unix timestamps. 
  In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
*/

function mergeRanges(allMeetings) {

  var mergedMeetings = [];

  for (var i = 0; i < allMeetings.length; i++) {
    for (var j = i + 1; j < allMeetings.length; j++) { 
      // Cases 1, 7
      if (allMeetings[i].endTime < allMeetings[j].startTime || allMeetings[i].startTime > allMeetings[j].endTime) {
        if (j === allMeetings.length - 1) {
          mergedMeetings = mergedMeetings.concat({startTime: allMeetings[i].startTime, endTime: allMeetings[i].endTime});
          break;
        } else {
          continue;
        }
      } else if (allMeetings[i].startTime <= allMeetings[j].startTime) { // Cases 2, 3, 4, 8
        if (allMeetings[i].endTime <= allMeetings[j].endTime) {
          mergedMeetings = mergedMeetings.concat({startTime: allMeetings[i].startTime, endTime: allMeetings[j].endTime});
          break;
        } else {
          mergedMeetings = mergedMeetings.concat({startTime: allMeetings[i].startTime, endTime: allMeetings[i].endTime});
          break;
        }
      } else { // Cases 5, 6, 9
        if (allMeetings[i].endTime > allMeetings[j].endTime) {
          mergedMeetings = mergedMeetings.concat({startTime: allMeetings[j].startTime, endTime: allMeetings[i].endTime});
          break;
        } else {
          mergedMeetings = mergedMeetings.concat({startTime: allMeetings[j].startTime, endTime: allMeetings[j].startTime});
          break;
        }
      } 
    }

    // if (i === allMeetings.length - 1) {
    //   console.log(allMeetings[i]);
    // }
  }

  // console.log(k)
  // return mergedMeetings;

  // only return array if it can no longer be condensed; trying to keep going through array until nothing is left to be merged
  if (mergedMeetings.length === allMeetings.length) {
    // console.log(k);
    return mergedMeetings;
  } else {
    return mergeRanges(mergedMeetings);    
  }
}

console.log(mergeRanges([
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 5},
  {startTime: 4, endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9, endTime: 10},
]));

// console.log(mergeRanges([
//   {startTime: 0, endTime: 1},
//   {startTime: 3, endTime: 8},
//   {startTime: 4, endTime: 8},
//   {startTime: 9, endTime: 12},
// ]));

/*
  Should give
  [ {0, 1},
    {3, 8},
    {9, 12}]
*/
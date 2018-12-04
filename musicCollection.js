
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if (!value) {
    delete collection[id][prop];
  } else if (prop === 'tracks'){
    if (!collection[id].hasOwnProperty('tracks')) {
      collection[id][prop] = [];
    }
    
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  
  return collection;
}

// Alter values below to test your code
// artist should be "ABBA"
// console.log(updateRecords(5439, "artist", "ABBA"));

// tracks should have "Take a Chance on Me" as the last element
// console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));

// artist should not be set
console.log(updateRecords(2548, "artist", ""));

// tracks should have "Addicted to Love" as the last element
// console.log(updateRecords(1245, "tracks", "Addicted to Love"));

// tracks should have "1999" as the first element
// console.log(updateRecords(2468, "tracks", "Free"));

// tracks should not be set
// console.log(updateRecords(2548, "tracks", ""));
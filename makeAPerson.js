/* "Make a Person" script challenge on freeCodeCamp:

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.*/

var Person = function(firstAndLast) {
    var first, last;

    this.getFullName = function() {
      // Initialize first and/or last names to their default value when the 
      // constructor was first instantiated if they have not already been set.
      if (first === undefined && last === undefined) {
        this.setFullName(firstAndLast);
      } else if (first === undefined) {
        this.setFirstName(firstAndLast.split(' ')[0]);
      } else if (last === undefined) {
        this.setLastName(firstAndLast.split(' ')[1]);
      }

      return first + ' ' + last;
    };
  
    this.getFirstName = function() {
      // Initialize first name to its default when the constructor was first
      // instantiated if it has not already been set.

      if (first === undefined) {
        this.setFirstName(firstAndLast.split(' ')[0]);
      }

      return first;
    };
  
    this.getLastName = function() {
      // Initialize last name to its default when the constructor was first
      // instantiated if it has not already been set.

      if (last === undefined) {
        this.setLastName(firstAndLast.split(' ')[1]);
      }

      return last;
    };
  
    this.setFullName = function(firstAndLast) {
      nameArr = firstAndLast.split(' ');
      first = nameArr[0], last = nameArr[1];
      console.log(first, last);
    };
  
    this.setFirstName = function(newFirst) {
      first = newFirst;
    };
    
    this.setLastName = function(newLast) {
      last = newLast;
    };
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry");

/**
 * https://www.codewars.com/kata/547c71fdc5b2b38db1000098
 * 
 * We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.
 *
 * We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available
 */

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
  
    // the problem was that the returned object did not have key/value properties for "firstName" or "lastName"
    return {
      name: this.firstName + ' ' + this.lastName,
      firstName: this.firstName,
      lastName: this.lastName
    };
}

/*
Since the description uses `new NameMe(first, last)` syntax, it is implied that a constructor/OOP sort of approach should be taken. In which case, it may be preferable to just have all properties set on the 'this' object in the function body without any return statement. E.G.

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}
*/
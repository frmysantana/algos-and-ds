
/*
 * https://www.codewars.com/kata/547f1a8d4a437abdf800055c
 * 
 * This is a follow-up to the thisIsAProblem challenge
 * 
 * Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".
 * 
 * So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.
 * 
 * If .firstName or .lastName are changed, then .fullName should also be changed
 * If .fullName is changed, then .firstName and .lastName should also be changed.
 * Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.
*/
function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, "fullName", {
        get: () => this.firstName + ' ' + this.lastName,
        set: (val) => {
        const parts = val.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0]
            this.lastName = parts[1]
        }
        }
    })
}

// this should be implementable through class syntax as well.
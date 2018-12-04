function verifyNums(args) {
    var params = arguments[0];
    // console.log(params);
    for (var i = 0; i < params.length; i++) {
        if (typeof(params[i]) !== 'number' || isNaN(params[i])) {
        return undefined;
        } else if (!isFinite(params[i]) && a === -1 * params[i]) {
        return undefined;
        }
    }

    return true;
}
  
function addTogether(args) {
    var a = arguments[0];

    if (!verifyNums(arguments)) {
        return undefined;
    }

    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else {
        return function (b) {
        if (!verifyNums(arguments)) {
            return undefined;
        }
        
        return a + b;
        };
    }
}
  
console.log(addTogether(2));
  
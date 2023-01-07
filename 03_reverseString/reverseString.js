const reverseString = function(toReverse) {
    let result = '';
    if (toReverse.length > 0) {
        for (let i = toReverse.length; i >= 0; i--) {
            result = result + toReverse.charAt(i);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

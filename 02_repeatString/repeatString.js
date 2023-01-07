const repeatString = function(phrase, numOfTimes) {
    let result = phrase;
    if (numOfTimes == 0) {
        result = '';
    } else if (numOfTimes < 0) {
        result = 'ERROR';
    }
    while (numOfTimes > 1) {
        result = result+phrase;
        numOfTimes--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

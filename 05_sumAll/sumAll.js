const sumAll = function(start, end) {
    let low = 0;
    let high = 0;
    let sum = 0;
    if (Number.isInteger(start) && Number.isInteger(end) && (start > -1 && end > -1)) {
        if (start <= end) {
            low = start;
            high = end;
        } else {
            low = end;
            high = start;
        } for (let i = low; i <= high; i++) {
            sum = sum + i;
        }
    } else {
        sum = 'ERROR';
    } return sum;
};

// Do not edit below this line
module.exports = sumAll;

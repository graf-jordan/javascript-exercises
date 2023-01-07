const removeFromArray = function(units, ...theArgs) {
    for (let i = 0; i < theArgs.length; i++) {
        const index = units.indexOf(theArgs[i]);
        if (index > -1) {
            units.splice(index, 1);
        }
    }
    return units;
};

// Do not edit below this line
module.exports = removeFromArray;

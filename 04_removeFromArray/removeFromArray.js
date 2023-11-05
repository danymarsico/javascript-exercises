const removeFromArray = function(array, ...checks) {
const finalArray = [];
array.forEach(element => {
    if(!checks.includes(element)) {
        finalArray.push(element);
        }
    });
        return finalArray;
    };

// Do not edit below this line
module.exports = removeFromArray;

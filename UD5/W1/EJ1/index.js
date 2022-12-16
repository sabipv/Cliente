const MINIMUM = 15;
function mergeValues(arrayOfIntegers) {
    let arrayReturn = [];
    let sum = 0;
    arrayOfIntegers.forEach(element => {
        sum +=element;
    })
    sum = Math.max(sum, MINIMUM);
    arrayReturn.push(sum);
    return arrayReturn;
}

let testing = [10,20,30,40];
console.log(mergeValues(testing)) // [100]
console.log(mergeValues(testing))
console.log(mergeValues(testing))
console.log(mergeValues(testing))
console.log(mergeValues(testing))
console.log(mergeValues(testing))
console.log(mergeValues(testing)) // [15] (MINIMUM)
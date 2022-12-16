function lazyMultiply(num1, num2) {
    if (num2) {
        console.log (num1 * num2);
        return num1 * num2;
    } else {
        return (nouNum) => {
            console.log (num1 * nouNum);
            return num1 * nouNum;
        }
    }
}

lazyMultiply(7,4) // 28
const perTwo = lazyMultiply(2)
perTwo(3) // 6
lazyMultiply(5)(10)

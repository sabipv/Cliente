function map(array, funcion) {
    let arrayDevolver = [];
    array.reduce((_, valor) => arrayDevolver.push(funcion(valor)),0);
    return arrayDevolver;
}


console.log(map([1,2,3], x => x * 2)) // [2,4,6]
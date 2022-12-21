function double(x) { return x*2 }
function add3(x) { return x+3 }

function doublePipe(...args) {
    let arrayFunciones = [...args];
    return (valor) => { 
        arrayFunciones.forEach(element => {
            for (let i=0; i<=1; i++)
                valor = element(valor);
        })
        return valor;
    }
}




let multiplyPerFourAndAddSix = doublePipe(double, add3)
console.log(multiplyPerFourAndAddSix(10)) // 46 = (10*2*2+3+3)
let addSixAndMultiplyPerFour = doublePipe(add3, double)
console.log(addSixAndMultiplyPerFour(10)) // 64 = (10+3+3)*2*2
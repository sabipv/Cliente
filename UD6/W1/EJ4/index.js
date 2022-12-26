let arrayResultados = []

function mostrarResult(contador, dato) {
    arrayResultados[contador] = (dato) ? 'fizz': contador;
    for (let i = 1; i <= arrayResultados.length; i++) {
      if (arrayResultados[i] === undefined) {
        return;
      } else if (arrayResultados[i] !== "publicado") {   
        console.log(arrayResultados[i]);
        arrayResultados[i] = "publicado";
      }
    }
}


function fizz(numero, callback) {
    let randomDelay = Math.round(Math.random() * 10000) + 100;
    setTimeout(() => {
        callback(numero % 3 === 0 || !!numero.toString().match(3));
    }, randomDelay)
}

function hacemosPromesa(contador) {
    return new Promise((resolve) => {
        fizz(contador, (valor) => resolve(valor)); 
    })
}
for(let a=1; a<=300; a++) {
    hacemosPromesa(a).then (data => {
        mostrarResult(a, data)
    })
}
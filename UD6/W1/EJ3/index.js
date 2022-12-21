const asyncRequest = require('../asyncRequest.js');

function cutriFetch(recurso) {
    return new Promise((resolve) => {
        asyncRequest(recurso, (valor) => resolve(valor));
    })
}

cutriFetch('resource1')
.then((valor) => {
    console.log(valor);
    return cutriFetch('resource2');
})
.then((valor) => {
    console.log(valor);
    return cutriFetch('resource3');
}).then((valor) => {
    console.log(valor);
    console.log('¡Completado!');
})
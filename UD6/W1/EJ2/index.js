const asyncRequest = require('../asyncRequest.js');

let recursos = [
    {res: "", get: false, impress: false},
    {res: "", get: false, impress: false},
    {res: "", get: false, impress: false}]

function publicar(resource, cola) {
    recursos[cola].res = resource;
    recursos[cola].get = true;

    for (let a=0; a<=2; a++) {
        if (recursos[a].get) {
            if (!recursos[a].impress) {
                console.log(recursos[a].res);
                recursos[a].impress = true;
            }
        } else {
            return;
        }
    }
    console.log('¡Completado!');
}


asyncRequest('resource1', (resource) => {publicar(resource, 0)})
asyncRequest('resource2', (resource) => {publicar(resource, 1)})
asyncRequest('resource3', (resource) => {publicar(resource, 2)})


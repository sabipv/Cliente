const asyncRequest = require('../asyncRequest.js');

asyncRequest('resource1', () => {
    asyncRequest('resource2', () => {
        asyncRequest('resource3', () => {
            console.log('¡Completado!');
        })
    })
})
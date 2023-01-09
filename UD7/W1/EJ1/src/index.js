const formulario = document.getElementById('formularioId');
const input = document.getElementById('inputId');
const resultDiv = document.querySelector('.resultado');

input.addEventListener('input', async (event) => {
    if (input.value.length === 5) {
        const data = new FormData();
        data.append('pin', input.value);
        let reply = await fetch('https://validate-pin.fly.dev/', {
        method: 'POST', 
        body: data
        })
        console.log(reply)
        reply = await reply.json();
        if (reply.valid) {
            resultDiv.textContent = 'El PIN es correcto';
            resultDiv.className = 'verde';
        } else {
            resultDiv.textContent = 'El PIN es incorrecto';
            resultDiv.className = 'rojo';
        }
    }
});
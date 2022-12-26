const fetch = require('node-fetch');

async function movimientos (url){
    let movimientos = [];
    const urlCompleta = 'https://pokeapi.co/api/v2/pokemon/'+url;
    const pokemon = await fetch(urlCompleta);
    if (pokemon.status !== 200) throw new Error(`HTTP error: ${pokemon.status}`)
    const pokemonJson = await pokemon.json();
    pokemonJson["moves"].forEach(element => {
        movimientos.push(element["move"]["url"]);
    })
    return movimientos;
}

async function traduccion (dato){
    const movimiento = await fetch(dato);
    if (movimiento.status !== 200) throw `HTTP error 2: ${movimiento.status}`
    const movimientoJson = await movimiento.json();
    //console.log(movimientoJson['names']['5']['name'])
    return movimientoJson['names']['5']['name']
}

movimientos('pikachu')
.then( datos => {
    let nombres = [];
    datos.forEach( dato => {
        traduccion(dato)
        .then ( nombreTraducido =>
            console.log(nombreTraducido)
        )
    })
    return nombres;
})
//.then((datos) =>
//    console.log(datos)
//)
.catch ((error)=> console.log(error) )



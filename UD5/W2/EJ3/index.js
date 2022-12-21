const data  = require ("./bul.json")
function primeraMayusculas (cadena){
    return (cadena.charAt(0).toUpperCase() + cadena.slice(1))
}
function imprimeEvolucion (evo){
    let cadena = ""
    evo.forEach(element => {
       cadena += (primeraMayusculas(element) + " - ") 
    });
    console.log(cadena.slice(0, cadena.length -2))
}
let cadenaEvolutiva = Array()
cadenaEvolutiva.push (data["chain"]["species"]["name"])
function evolucion (digievolucion, cadena){
    try{
        if (digievolucion["0"]["evolves_to"]){
            evolucion(digievolucion["0"]["evolves_to"])
        }
    }
    catch (except){
    }
    cadenaEvolutiva.push(digievolucion[0]["species"]["name"])
}
evolucion(data["chain"]["evolves_to"], cadenaEvolutiva)
imprimeEvolucion(cadenaEvolutiva)

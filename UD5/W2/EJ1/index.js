let direcciones = [
    {
    // Válido
    pais: 'España', region: '', cp: '46014',
    ciudad: 'Valencia', direccion: 'Carrer Misericòrdia, 34',
    complemento: '',
    movil: '', fijo: '961 20 69 90'
    },
    {
    // Inválido: no tiene movil o fijo
    pais: 'España', region: '', cp: '46960',
    ciudad: 'Aldaia', direccion: 'C/ Montcabrer, 22',
    complemento: 'Pol. Ind. La Lloma',
    movil: '', fijo: ''
    },
    {
    // Inválido: no tiene país
    pais: '', region: 'Alicante', cp: '',
    ciudad: 'Petrer', direccion: 'Los Pinos, 7',
    complemento: '',
    movil: '', fijo: '965 37 08 88'
    }
]

let comprobacion1 = element => !!element.pais && !!element.ciudad && !!element.direccion;
let comprobacion2 = element => !!element.movil || !!element.fijo;
let comprobacion3 = element => !!element.region || !!element.cp;

function comprobar(element) {
    let valido = comprobacion1(element);
    valido = valido && comprobacion2(element);
    valido = valido && comprobacion3(element);
    return valido;
}


console.log(direcciones.filter(element => comprobar(element)));
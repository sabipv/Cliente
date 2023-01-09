import fetch from 'node-fetch';
import util from 'util';

async function consigueDatos (url) {
    try {
        const datos = await fetch(url);
        if (datos.status !== 200) throw 'No se han podido obtener las divisas';
        return datos.json();
    } catch(error){
        throw 'No se han podido obtener las divisas';
    }
}

async function consigueCurrency (texto){
        const monedas = await consigueDatos('https://api.frankfurter.app/currencies');
        const monedaEncontrada = Object.entries(monedas).find(moneda => moneda[1].match(new RegExp(texto, "i")))
        if (!monedaEncontrada) throw ('No se ha encontrado ninguna divisa con el nombre ' + texto);
        return monedaEncontrada[0];
}

function YYYYMMDD(date) {
    return date.toISOString().slice(0, 10);
}

function addDays(date, weeks) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + weeks)
    newDate = YYYYMMDD(newDate);
    return newDate;
}

function buscaFechas(fecha, weeks) {
    let conjuntoFechas =[];
    for (let a=weeks-1; a>=0; a--) {
        conjuntoFechas.push(addDays(fecha, a*(-7)));
    }
    return conjuntoFechas;
}

async function cambioEuros(moneda, fecha) {
    const url = 'https://api.frankfurter.app/'+fecha+'?from='+moneda[0]+'&to=EUR';
    const eurosCurrency = await consigueDatos(url);
    const ratesEuros = eurosCurrency.rates.EUR;
    return ratesEuros;
}

async function datoSemanal(date, moneda) {
    try {
        const url = `https://api.frankfurter.app/${date}?from=${moneda}`;
        const valorFechaMoneda = await consigueDatos(url);
        if (valorFechaMoneda.date < addDays(date, (-2))) 
            throw `El cambio no pertenece a la fecha solicitada`
        const listaArray = (Object.entries(valorFechaMoneda.rates));
        const minimo = Math.min(...listaArray.map(entrada => entrada[1]))
        const cambioMinimo = listaArray.find(value => value[1]===minimo);
        let diaAntes = addDays(date, -1);
        const datoFinal = await cambioEuros(cambioMinimo, diaAntes)
        return {
            day: date,
            min: {
                currency: cambioMinimo[0],
                EUR: datoFinal
            }
        }
    }catch (e) {
        throw `No se ha podido obtener el cambio para la divisa ${moneda} el día ${date}: ${e}`
    }
}

async function consigueRates(fecha, weeks, moneda) {
    let arrayPromesas = [];
    let arrayFechas = buscaFechas(fecha, weeks);
    arrayFechas.forEach(fecha => {
        arrayPromesas.push(datoSemanal(fecha, moneda));
    })
    const confirmaPromesas = Promise.all(arrayPromesas);
    return confirmaPromesas;
}

async function getMinRates (date, currency, weeks) {
    try {
        let moneda = await consigueCurrency(currency);
        let cambios = await consigueRates(date, weeks, moneda)
        let objeto = {            
            currency: moneda,
            rates: cambios
        }
        return util.inspect(objeto, {showHidden: false, depth: null, colors: true})
    } catch(e) {
        console.log(e)}
}

export {
    getMinRates,
}
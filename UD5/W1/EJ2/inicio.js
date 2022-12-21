function createIDGenerator (longitud) {
    let contador = 1;
    return () => {
        let numCero = longitud - contador.toString().length;
        let construyeID = "0".repeat(numCero);
        construyeID += contador;
        contador++;
        console.log(construyeID);
    }
}

const len3Id = createIDGenerator(3);
len3Id() // 001
len3Id() // 002
len3Id() // 003
const len5Id = createIDGenerator(5);
len5Id() // 00001

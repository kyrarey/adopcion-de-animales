//Función que devuelve un arreglo con un número determinado (pasado por parámetro) de elementos extraídos de otro arreglo (pasado por parámetro). Los elementos extraídos son aleatorios y no se repiten.

const randElemArray = (number, array) => {
    let str = array;
    let petsAux = [];
    let numAux = [];
    let randNum = 0;
    for (let i = 0; i < number; i++) {
        randNum = Math.floor(Math.random() * str.length);
        if (numAux.includes(randNum) === true) {
            i = i - 1;
        } else {
            numAux.push(randNum);
            petsAux.push(str[randNum]);
        }
    }
    return petsAux;
}

export default randElemArray;


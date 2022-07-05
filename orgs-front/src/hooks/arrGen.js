//Función que devuelve un arreglo con un número determinado (pasado por parámetro) de elementos extraídos de otro arreglo (pasado por parámetro). Los elementos extraídos son aleatorios y no se repiten.

export const randElemArray = (arr, arrLength) => {
    let petsAux = [];
    let numAux = [];
    let randNum = 0;
    for (let i = 0; i < arrLength; i++) {
        randNum = Math.floor(Math.random() * arr.length);
        if (numAux.includes(randNum) === true) {
            i = i - 1;
        } else {
            numAux.push(randNum);
            petsAux.push(arr[randNum]);
        }
    }
    return petsAux;
}

//Función que devuelve un arreglo con un número determinado (pasado por parámetro) de elementos extraídos de otro arreglo (pasado por parámetro). Los elementos extraídos son secuenciales.

export const fixedElemArray = (arr, arrLength, count) => {
    let petsAux = [];
    let initNum = arrLength * parseInt(count - 1);
    let finalNum = arrLength * (parseInt(count) );
    for (let i = initNum; i < finalNum; i++) {
        if(arr[i] !== undefined)
            petsAux.push(arr[i])
        }
    return petsAux;
}

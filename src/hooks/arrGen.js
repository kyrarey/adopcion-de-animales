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

//Función que devuelve un arreglo conteniendo los elementos que se encuentren en los 2 arreglos pasados como parámetros
//Los arreglos pasados por parámetros (los objetos de arr1 contienen una key llamada _.id y los del arr2 una key llamada animalId), así como el arreglo resultante, son arreglos de objetos.

export const filteredArray = (arr1, arr2) => {
    let petsAux = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i].animalId === arr2[j]._id) {
          petsAux.push(arr2[j]);
        }
      }
    }
    return petsAux;
}
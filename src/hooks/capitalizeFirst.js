const capitalizeFirst = string => {
    const stringArr = string.split(" ");
    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] = stringArr[i][0].toUpperCase() + stringArr[i].substring(1)
    }
    return  stringArr.join(" ");
}

export default capitalizeFirst;

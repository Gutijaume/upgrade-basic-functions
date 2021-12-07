const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']



let suma = 0
let averageWord = (data) =>{
    for (let i = 0; i<data.length; i++){
        if (typeof data[i] === "number") {
            suma += data[i]
        } else {
            suma += data[i].length
        }
    } return (suma)
}



let result = averageWord(mixedElements)
console.log(result)
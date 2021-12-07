const numbers = [1, 2, 3, 5, 45, 37, 58];


let suma = 0
let sumAll = (data) => {
   for (let i = 0; i<data.length; i++){
       suma += data[i]
   } return (suma)
  }

let total = sumAll(numbers)
console.log(total)



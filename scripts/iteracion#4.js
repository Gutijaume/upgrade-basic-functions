//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:


const numbers = [12, 21, 38, 5, 45, 37, 6];

let suma = 0
let promedio = 0
let media = (data) => {
   for (let i = 0; i<data.length; i++){
       suma += data[i]
       promedio = suma / data.length
   } return (promedio)
  }

let total = media(numbers)
console.log(total)

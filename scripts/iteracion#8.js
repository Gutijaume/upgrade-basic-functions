const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  

let counter = (param) =>{
    let cont = 0
    for (let i = 0; i <counterWords.length; i++){
        if (param === counterWords[i]){
            cont += 1
        }
    } console.log (cont)
}
counter (counterWords)

  
let repeatCounter = (data) =>{
        data.forEach((word, index, array)=>{
        let firstIndex = array.indexOf(word)
        let lastIndex = array.lastIndexOf(word)
        if (firstIndex !== lastIndex){
            console.log(word + " is duplicated " + " X " + " times")
        } else {
            console.log(word + " is not duplicated")
        }
    }) 
} 

repeatCounter(counterWords)




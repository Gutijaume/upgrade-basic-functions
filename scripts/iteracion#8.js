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
  



let repeatCounter = (data) => {
    data.sort(); 
    let words = []
  
    for(let i = 0; i< data.length; i++){
      if(data[i] === data[i+1]){
         if(words[words.length -1] !== data[i]){
            words.push(data[i])
         }
      } 
    }
    console.log(words);
  }
  repeatCounter (counterWords)

let finalList = (counterWords - words)
console.log(finalList)

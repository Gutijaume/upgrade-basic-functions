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
  


let repeatCounter = (data) =>{
    for (let i =0; i<data.length; i++){
        let count = 0;
        if (data[i] === data [i+1]){
            count += 1
        } if (count >= 2) {
            console.log (data[i] + " is " + count + " times repeated")
        } else {console.log(data[i] + " is not repeated")}
    }
}

repeatCounter (counterWords)





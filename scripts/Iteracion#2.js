const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];



let findLongestWord = (data) =>{
  let longestWord = data[0]
  for (let i = 0; i < data.length; i++){
    if (data[i].length > longestWord.length){
      longestWord = data[i]
    }
  } 
}

let longestHero = findLongestWord(avengers)

console.log(longestHero)









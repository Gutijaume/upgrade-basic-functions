const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  let removeDuplicates = (data) =>{
      return data.filter ((original, i)=> {
          return data.indexOf(original) === i
      })
  }

  console.log(removeDuplicates(duplicates))







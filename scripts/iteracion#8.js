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
  



  
  function cuantosRepetidos(array, elemento) {//Aquí le llamo elemento
      var contador = 0;
      for (var i = 0; i < array.length; i++) {
          for(item of array[i]){/*Aquí le llamo item para no pisar la variable,
   además hago el loop sobre array[i]!*/
              if(item[i] === elemento[i]){
                  contador++;
              }
          }
      }
      return contador;
  }
  console.log(cuantosRepetidos(counterWords, 'sleep'));
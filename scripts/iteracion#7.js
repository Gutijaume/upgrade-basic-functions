const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
let finderName = (data, nombre) =>{
    for (let i = 0; i < data.length; i++){
        if (founded = data[i].includes(nombre)){ 
            console.log(founded)
        } else {console.log("Name not found")}
    }

}

finderName (nameFinder, "Tony" ) //En este parámetro buscaremos el nombre


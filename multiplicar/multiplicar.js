
const fs = require('fs');
const colors = require('colors');
//const fs = require('express'); paquetes no nativos de node
//const fs = require('./'); archivos locales que nosotros escribimos

let listarTabla = ( base, limite = 10) => {
  
  console.log('================'.bgRed.blue);
  console.log(`tabla de ${ base }`.green);
  console.log('================'.bgCyan.yellow);
  
  for (let a = 1; a <= limite ; a++) {
    console.log(`${base} * ${a} = ${a*base}`);
    
  }
}


let crearArchivo = ( base, limite = 10 ) => {
  return new Promise( (resolve, reject ) => {

    if ( !Number(base) ){
      reject(`El valor introducido ${base} no es un numero`);
      return;
    }
    
    let data = '';

    for (let x = 1; x <= limite; x++) {
      data += (`${base} * ${x} = ${x*base}\n`);  
    }

    fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
      if(err) reject(err);
      else resolve(`tabla-${ base }-al-${ limite }.txt`.blue.bgRed);
  
    });

  })
}

module.exports = {
  crearArchivo,
  listarTabla
}
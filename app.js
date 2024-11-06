const fs = require('node:fs');

console.clear();

const base = 5;
let salida = '';


for (let i = 0; i <= 10 ; i++) {
    salida += `${ base } x ${ i } = ${ base * i } \n`;
    
}

console.log(salida);

fs.writeFile( 'tabla-5.txt', salida, (err) => {
    if (err) throw err;
    
    console.log('tabla-5.txt creado');
})
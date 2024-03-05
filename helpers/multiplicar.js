const { rejects } = require('assert');
const fs = require('fs');

//Exportando modulos de funciones para usar en otro archivo
/*const crearArchivo = ( base = 5 ) => {
    
    return new Promise ( (resolve, reject) => {

        console.log('========================');
        console.log(`    Tabla del ${ base }`);
        console.log('========================');
        
        let i;
        let salida = '';
    
        for ( i = 1; i<=10; i++) {
            salida += `${base} x ${ i } = ${ base * i}\n`;
        }
        console.log(salida);
    
        fs.writeFileSync(`tabla-${ base }.txt`, salida );
    
        resolve(`tabla-${ base }.txt`);
    }); 
}*/



//Con await
const crearArchivo = async( base = 5, listar = false, X ) => {
    try {
        let i;
        let salida = '';

        for ( i = 1; i <= X; i++) {
            salida += `${base} x ${ i } = ${ base * i}\n`;
        }

        if ( listar ) {
            console.log('========================');
            console.log(`    Tabla del ${ base }`);
            console.log('========================');
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida );

        return `tabla-${ base }.txt`;

    } catch(err) {
        throw err;
    }
}; 

module.exports = {
    crearArchivo
}
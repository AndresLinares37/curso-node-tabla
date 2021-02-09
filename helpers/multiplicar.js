const fs = require('fs');
const colors = require('colors');


const crearArchivo =  async(base = 5, listar = false, hasta = 10) => {

    try{
    
        let salida, salidacons = '';
    
        for( let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            salidacons += `${base} ${'x'.red} ${i} ${'='.cyan} ${base*i}\n`;
        }

        if (listar){
            console.log('============================='.rainbow);
            console.log('        TABLA DEL:', colors.red(base));
            console.log('============================='.green);

            console.log(salidacons);
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base} hasta ${hasta}.txt`,salida)

        return `Tabla-${base}.txt creado`;
    }catch(err){
        throw err;
    }       

}


module.exports = {
    crearArchivo
}
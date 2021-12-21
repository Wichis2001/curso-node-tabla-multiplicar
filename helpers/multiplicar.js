const fs = require('fs');
const colors = require('colors/safe');
//Hecho con promesas normales
//const crearArcivo2 = (base=5)=>{
//    return new Promise((resolve, reject)=>{
//        try{
//            const nombreArchivo=`tabla-${base}.txt`;
//            console.log('=====================');
//            console.log('    Tabla del:', base);
//            console.log('=====================');
//            let salida='';
//
//            for (let index = 1; index <=10; index++) {
//               salida+=(`${base} * ${index} = ${base*index}\n`);    
//            }
//
//            console.log(salida);
//
//            fs.writeFileSync(`${nombreArchivo}`, salida);
//            resolve(nombreArchivo);
//        } catch(error){
//            reject(error);
//        }
//    })
//}

//Hecho con async y await
const crearArchivo=async(base=5,listar, tope=10)=>{
    try{
        const nombreArchivo=`tabla-${base}.txt`;

        let salida='';
        let consola='';

        for (let index = 1; index <=tope; index++) {
            salida+=(`${base} * ${index} = ${base*index}\n`);   
            consola+=(`${base} ${colors.blue('*')} ${index} ${colors.green('=')} ${colors.bgCyan(base*index)}\n`);   
        }
        if(listar){
            console.log(colors.rainbow('====================='));
            console.log(colors.green('    Tabla del:'),colors.bgMagenta( base));
            console.log(colors.rainbow('====================='));
            console.log(consola);
        }

        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
        return (nombreArchivo);
        
    } catch(error){
        throw (error);
    }
};

module.exports={
    crearArchivo
};
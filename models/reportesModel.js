const path = require('path');
const fs = require('fs');

const articulosFile = path.resolve('files/articulos.json');

const getReport = (id) => {
    let response;
    try {
        const data = fs.readFileSync(articulosFile, 'utf8');
        let articulos = JSON.parse(data);
        if(id === '121'){
            let articulosReporte = articulos.filter((articulo) => parseFloat(articulo.price) > 500);
            response = articulosReporte && articulosReporte.length ? articulosReporte : 'No hay articulos con valor superior a $500';
        }else if(id === '122'){
            let precioPromedio = articulos.reduce((total, articulo) => total + parseFloat(articulo.price), 0) / articulos.length;
            response ='El precio promedio de los articulos es: $' + precioPromedio.toFixed(2);
        }
    } catch (error) {
        console.log(error);
        response = 'error leyendo articulos';
    }
    return response;
}

module.exports = { getReport };
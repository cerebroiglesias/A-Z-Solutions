const path = require('path');
const fs = require('fs');

const articulosFile = path.resolve('files/articulos.json');

const getAll = () => {
    try{
        let data = fs.readFileSync(articulosFile, 'utf8');
        response = JSON.parse(data);
    }catch(error){
        console.log('error')
        response = 'error leyendo articulos';
    }
    return response;
}

const findOne = (id) => {
    let response;
    try{
        let data = fs.readFileSync(articulosFile, 'utf8');
        let articulos = JSON.parse(data);
        let articuloCliente = articulos.filter((item) => item.id === id);
        response = articuloCliente && articuloCliente.length ? articuloCliente[0] : 'Articulo no encontrado'
    }catch(error){
        console.log('error')
        response = 'error leyendo articulos';
    }
    return response;
}

const save = (articulo) => {
    let response;
    if(!articulo){
        return 'No se recibio el articulo';
    }
    let newArticulo = {
        "name": articulo.name,
        "price": articulo.price,
        "createdAt": articulo.createdAt
    };
    try{
        let data = fs.readFileSync(articulosFile, 'utf8');
        let articulos = JSON.parse(data);
        let newId = articulos && articulos.length ? articulos[articulos.length - 1].id : 0;
        newArticulo.id = newId + 1;
        return newArticulo;
        articulos.push(newArticulo);
        fs.writeFileSync(articulosFile, JSON.stringify(articulos));
        response = newArticulo;
    }catch(error){
        console.log('error')
        response = 'error leyendo articulos';
    }
    return response;
}

const update = (id, articulo) => {
    let response;
    console.log(articulo, id);
    if(!articulo || !id){
        return 'No se recibio el articulo';
    }
    let newArticulo = {
        "id": id,
        "name": articulo.name,
        "price": articulo.price,
        "createdAt": articulo.createdAt
    };
    try{
        let data = fs.readFileSync(articulosFile, 'utf8');
        let articulos = JSON.parse(data);
        let articuloAux = articulos.filter((item) => item.id === id);
        if(articuloAux && articuloAux.length){
            return newArticulo;
            articulos = articulos.map((item) => item.id === newArticulo.id ? newArticulo : item);
            fs.writeFileSync(articulosFile, JSON.stringify(articulos));
            response = newArticulo;
        }else{
            response = 'articulo no encontrado';
        }
    }catch(error){
        console.log('error')
        response = 'error leyendo articulos';
    }
    return response;
}

const erase = (id) => {
    let response;
    try{
        let data = fs.readFileSync(articulosFile, 'utf8');
        let articulos = JSON.parse(data);
        erasedArticulo = articulos.filter((item) => item.id === id);
        return erasedArticulo && erasedArticulo.length ? erasedArticulo[0] : 'Articulo no encontrado';
        articulos = articulos.filter((item) => item.id !== id);
        fs.writeFileSync(articulosFile, JSON.stringify(articulos));
        response = erasedArticulo && erasedArticulo.length ? erasedArticulo[0] : 'Articulo no encontrado'
    }catch(error){
        console.log('error')
        response = 'error leyendo articulos';
    }
    return response;
}


module.exports = {
    getAll,
    findOne,
    save,
    update,
    erase
}
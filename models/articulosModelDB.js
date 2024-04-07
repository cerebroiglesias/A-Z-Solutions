const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articuloSchema = new Schema({
    id: String,
    nombre: String,
    precio: String,
    createdAt: Date
});

const Articulo = mongoose.model('articulos', articuloSchema);

const getAll = async () => {
    return await Articulo.find({}).exec();
}

const findOne = async (id) => {
    return await Articulo.findOne({id: id}).exec();
}

const save = async (id, nombre, precio, createdAt) => {
    const articulo = new Articulo({
        id: id,
        nombre: nombre,
        precio: precio,
        createdAt: createdAt
    })
    return await articulo.save()
}

const update = async (id, nombre, precio, createdAt) => {
    return Articulo.updateOne({id: id}, {$set: {nombre: nombre, precio: precio, createdAt: createdAt}});
}

const erase = async (id) => {
    return await Articulo.deleteOne({id: id});
}

module.exports = {
    getAll,
    findOne,
    save,
    update,
    erase
}
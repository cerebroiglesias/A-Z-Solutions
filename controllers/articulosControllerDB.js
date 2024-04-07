const model = require('../models/articulosModelDB');

const home = (req, res) => {
    model.getAll().then(data => res.send(data)).catch(err => res.send(err));
}

const findOne = (req, res) => {
    const id = req.params.id;
    model.findOne(id).then(data => res.send(data)).catch(err => res.send(err));
}

const save = async (req, res) => {
    const { id, nombre, precio, createdAt } = req.body;
    model.create(id, nombre, precio, createdAt).then(data => res.send(data)).catch(err => res.send(err));
}

const update = async (req, res) => {
    const { id, nombre, precio, createdAt } = req.body;
    model.update(id, nombre, precio, createdAt).then(data => res.send(data)).catch(err => res.send(err));
}

const erase = async (req, res) => {
    const { id } = req.body;
    model.erase(id).then(data => res.send(data)).catch(err => res.send(err));
}

module.exports = {
    home,
    findOne,
    save,
    update,
    erase
}
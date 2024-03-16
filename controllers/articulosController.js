const model = require('../models/articulosModel');

const home = (req, res) => {
    res.send(model.getAll());
}

const findOne = (req, res) => {
    res.send(model.findOne());
}

const save = (req, res) => {
    res.send(model.save(req.body));
}

const update = (req, res) => {
    console.log('id');
    res.send(model.update(req.params.id, req.body));
}

const erase = (req, res, ) => {
    res.send(model.erase(req.params.id));
}

module.exports = {
    home,
    findOne,
    save,
    update,
    erase
}
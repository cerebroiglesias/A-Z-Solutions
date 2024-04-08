const model = require('../models/articulosModelDB');

/**
 * Retrieves all articles and sends it as a response.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {void}
 */
const home = (req, res) => {
    model.getAll().then(data => res.send(data)).catch(err => res.send(err));
}

/**
 * Finds and retrieves a single item based on the provided ID from the model.
 *
 * @param {object} req - The request object containing parameters
 * @param {object} res - The response object for sending data or errors
 * @return {Promise} A Promise that resolves with the fetched data or an error
 */
const findOne = (req, res) => {
    const id = req.params.id;
    model.findOne(id).then(data => res.send(data)).catch(err => res.send(err));
}

/**
 * Saves the data received in the request body using the model create method.
 *
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @return {Promise} The result of the create method
 */
const save = async (req, res) => {
    const { id, nombre, precio, createdAt } = req.body;
    model.create(id, nombre, precio, createdAt).then(data => res.send(data)).catch(err => res.send(err));
}

/**
 * Updates a record with the provided parameters.
 *
 * @param {Object} req - The request object containing id, nombre, precio, and createdAt.
 * @param {Object} res - The response object.
 * @return {Promise} A Promise that resolves with the updated data or rejects with an error.
 */
const update = async (req, res) => {
    const { id, nombre, precio, createdAt } = req.body;
    model.update(id, nombre, precio, createdAt).then(data => res.send(data)).catch(err => res.send(err));
}

/**
 * Erase data based on provided id.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Promise} The promise of sending data or error in response
 */
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
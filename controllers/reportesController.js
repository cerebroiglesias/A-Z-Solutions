const model = require('../models/reportesModel');

const getReport = (req, res) => {
    console.log(req.params.id);
    res.send(model.getReport(req.params.id));
}

module.exports = getReport;
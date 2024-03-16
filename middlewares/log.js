const fs = require('fs');
const path = require('path');

const logFile = path.resolve('files/app.log');

const log = (req, res, next) => {
    const logData = 'Llamado entrante metodo: ' + req.method + ', url: ' + req.url;
    fs.appendFile(logFile, logData + '\n', (err) => {
        if(err){
            console.log(err);
        };
        next();
    })
}

module.exports = log;
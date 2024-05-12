const path = require('path');
const fs = require('fs');
const session = require('express-session');
const fileStoreSession = require('session-file-store')(session);
const url = require('url');

const sessionConfig = session({
    store: new fileStoreSession({
        path: path.join(__dirname, '../sessions'),
        ttl: 60
    }),
    secret: 'A-Z-Solutions',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
})

const isAuthenticated = (req, res, next) => {
    var query = url.parse(req.url, true).query;
    if(req.session && req.session.contador){
        req.session.contador++;
        next();
    }else{
        req.session.name = query && query.nombre ? query.nombre : null;
        req.session.contador = 1;
        next();
    }
}

module.exports = {
    isAuthenticated,
    sessionConfig
}
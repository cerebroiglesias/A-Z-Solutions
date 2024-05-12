const url = require('url');
const cookie = require('cookie');
const { title } = require('process');

const okResponse = { proceso: 'ok'};

const home = (req, res) => {
    if(req.session.contador && req.session.contador > 0){
        if(req.session.name){ 
            if(req.session.contador === 1){
                res.render('index', {
                    title: `Bienvenido ${req.session.name}`,
                    message: `Bienvenido ${req.session.name}`
                });
            }else{
                res.render('index', {
                    title: `Bienvenido ${req.session.name}`,
                    message: `${req.session.name}, Visitaste la pagina ${req.session.contador} veces`
                });
            }
        }else{
            if(req.session.contador === 1){
                res.render('index', {
                    title: `Home`,
                    message: `Te damos la bienvenida`
                });
            }else{
                res.render('index', {
                    title: `Home`,
                    message: `Te damos la bienvenida, Visitaste la pagina ${req.session.contador} veces`
                });
            }
        }
    }else{
        res.send('Te damos la bienvenida');
    }
}

const olvidarCookie = (req, res) => {
    try{
        req.session.contador = 0;
        res.send('Hasta luego ' + req.session.name);
    }catch(err){
        res.json({
            error: descripción
        });
    }
    
}

const setCookie = (req, res) => {
    var query = url.parse(req.url, true).query;
    if(!query || !query.nombre || !query.valor){
        res.send(`{error:'set-cookie: falta nombre ó valor'`)
        return;
    }
    res.setHeader('Set-Cookie', cookie.serialize(query.nombre, query.valor, { maxAge: query.tiempo, path: '/' }));
    res.status(200).json(okResponse);
}

const clearCookie = (req, res) => {
    var query = url.parse(req.url, true).query;
    if(!query || !query.nombre){
        res.send(`{error:'set-cookie: falta nombre'`)
        return;
    }
    res.clearCookie(query.nombre);
    res.status(200).json(okResponse);
};

const getCookies = (req, res) => {
    res.send(req.cookies);
}

module.exports = {
    home,
    olvidarCookie,
    setCookie,
    clearCookie,
    getCookies
};
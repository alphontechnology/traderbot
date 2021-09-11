function doLogin(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    if(email === 'contato@email.com' && password === '111')
    res.sendStatus(200); // auth ok
    else res.sendStatus(401); // unauthorized
}

function doLogout(req, res, next){

}

module.exports = {
    doLogin,
    doLogout
}
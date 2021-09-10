export function doLogin(email, password){

    return new Promise((response, reject) => {
        if(email === 'contato@email.com' && password === '111'){
            response(true);
        }reject('Invalid user and/or password!'); // never say error to user!!!!
    })


    if(email === 'contato@email.com' && password === '111'){
        return true;
    } return false;
}
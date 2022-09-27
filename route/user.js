const { request } = require('express');

const router = require('express').Router();

router.get('/login',(request,response) => {
    response.render('login');
})

router.get('/register',(request,response) => {
    response.render('register');
})

router.post('/register',(request,response) => {
    const { name, email, password, password2 } = request.body;
    let errors = [];
    // check for all fields..
    if(!name || !email || !password || !password2) {
        errors.push({meg:'pLease add all the fields'});
    }
    // check for password match..
    if(password !== password2) {
        errors.push({meg:'Passwords do not match'});
    }
    // check for password length..
    if(password.length < 6) {
        errors.push({msg:'Password should be 6 character long..'})
    }
    // check for errors..
    if(errors.length > 0) {
        response.render('register',{
            errors,
            name,
            email,
            password,
            password2,
        })
    }
    else {
        response.send("Hello");
    }
})
 
module.exports = router;
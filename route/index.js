const router = require('express').Router();

router.get('/',(request,response) => {
    response.render('welcome');
})
module.exports = router;
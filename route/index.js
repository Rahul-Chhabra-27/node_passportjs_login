const router = require('express').Router();

router.get('/',(request,response) => {
    response.json({message:"Hii Server!"});
})
module.exports = router;
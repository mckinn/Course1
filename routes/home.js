
const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    res.render('index',   // the name of the pug template file
    { title:"my express app", message:"Hello steve"});
});

module.exports = router;
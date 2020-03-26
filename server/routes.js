const express = require('express');

const router = new express.Router();


router.get('/index', (req, res) => {
    console.log('Loaded main page')
})

module.exports = router;
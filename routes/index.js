const express = require('express');
const router = express.Router();
const tinyURL = require('tinyurl');

//render landing page
router.get('/', (req, res) => {
    res.render('index');
});

//API for url shortning
router.post('/shortenUrl', (req, res) => {
    tinyURL.shorten(req.body.url).then(result => {
        res.send(result)
    }).catch(err => {
        res.send({
            message: 'something went wrong'
        })
    })
})
module.exports = router;
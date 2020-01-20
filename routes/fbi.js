const router = require('express').Router();

router.get('/fbi', (req, res) => {
    res.render('fun');
})

module.exports = router;
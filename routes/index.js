const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('main', { title: "메인" });
})

module.exports = router;
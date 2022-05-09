const express = require('express');
const { Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.route('/create')
    .get(async (req, res, next) => {
        res.render('post');
    })
    .post(async (req, res) => {
        await Post.create({
            title: req.body.title,
            content: req.body.content,
            UserId: req.user.id,
        });
        res.redirect('/');
})

module.exports = router;
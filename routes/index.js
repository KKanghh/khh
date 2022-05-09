const express = require('express');
const { Post, User, Comment } = require('../models');
const { isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get('/', async (req, res, next) => {
    const posts = await Post.findAll({
        include: {
            model: User,
        },
        order: [['createdAt', 'DESC']],
    });
    res.render('main', { title: "메인", posts });
});

router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', { title: '회원가입' });
});
module.exports = router;
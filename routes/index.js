const express = require('express');
const { Post, User, Comment } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    const posts = await Post.findAll({
        include: {
            model: User,
        },
        order: [['createdAt', 'DESC']],
    });
    res.render('main', { title: "메인", posts });
})

module.exports = router;
const express = require('express');
const { Post, User } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.route('/create')
    .get(isLoggedIn, async (req, res, next) => {
        console.log(11111111111111);
        return res.render('post');
    })
    .post(async (req, res) => {
        console.log(2222222222222222);
        await Post.create({
            title: req.body.title,
            content: req.body.content,
            UserId: req.user.id,
        });
        return res.redirect('/');
    });

router.get('/:id', async (req, res, next) => {
    console.log(33333333333333, req.params.id);
    const post = await Post.findOne({
        where: { id: req.params.id },
        include: [{
            model: User,
        }]
    });
    const comments = await post.getComments({
        include: [{
            model: User,
        }]
    });
    res.render('postDetail', { post, comments });
});

module.exports = router;
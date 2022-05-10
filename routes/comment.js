const express = require('express');
const { Comment } = require('../models');

const router = express.Router();

router.post('/', async(req, res) => {
    await Comment.create({
        content: req.body.comment,
        PostId: req.body.post,
        UserId: req.user.id,
    });
    res.redirect(`post/${req.body.post}`);
});

module.exports = router;
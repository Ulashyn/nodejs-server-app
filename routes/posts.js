const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const postsValidator = require('../validators/post');

router.post('/posts', postsValidator.create, postsController.create);

module.exports = router;
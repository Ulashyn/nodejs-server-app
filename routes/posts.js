const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const postsValidator = require('../validators/post');

router.post('/create-post', postsValidator.create, postsController.create);
router.post('/edit-post', postsValidator.edit, postsController.edit);
router.get('/post/:id', postsController.getById);
router.get('/latest-posts/:qty', postsController.getLatest);
router.delete('/delete-post/:id', postsController.delete);

module.exports = router;
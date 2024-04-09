const express = require('express');
const router = express.Router();
const uiController = require('../controllers/ui');

  // set main route
  router.get('/', uiController.main);
  // get about
  router.get('/about', uiController.about);
  // get posts
  router.get('/posts', uiController.posts);
  // get new-post
  router.get('/new-post', uiController.newPost);
  // get single-post
  router.get('/posts/:id', uiController.singlePost);
  // get edit post
  router.get('/edit-post/:id', uiController.editPost);


module.exports = router;
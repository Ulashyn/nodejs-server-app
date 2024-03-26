const postsService = require('../services/posts');
let ctrl = {};

ctrl.main = (req, res) => {
  return res.render('pages/index');
};
ctrl.about = (req, res) => {
  return res.render('pages/about');
};
ctrl.posts = async (req, res, next) => {
  try {
    const result = await postsService.getLatestPosts(5);
    return res.render('pages/posts', {posts: result || []});
  } catch (error) {
    next(error);
  }
};
ctrl.newPost = (req, res) => {
  return res.render('pages/new-post');
};
ctrl.singlePost = (req, res) => {
  return res.render('pages/single-post');
};

module.exports = ctrl;
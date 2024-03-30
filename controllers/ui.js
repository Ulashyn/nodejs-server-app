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
    const result = await postsService.getLatestPosts(6);
    return res.render('pages/posts', {posts: result || []});
  } catch (error) {
    next(error);
  }
};
ctrl.newPost = (req, res) => {
  return res.render('pages/new-post');
};
ctrl.singlePost = async (req, res, next) => {
  const {id} = req.params;
  try {
    const post = await postsService.findById(id);
    console.log(post);
    return res.render('pages/single-post', {post});
  } catch (error) {
    next(error);
  }
};

module.exports = ctrl;
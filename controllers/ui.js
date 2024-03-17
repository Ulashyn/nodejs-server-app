let ctrl = {};

ctrl.main = (req, res) => {
  return res.render('pages/index');
};
ctrl.about = (req, res) => {
  return res.render('pages/about');
};
ctrl.posts = (req, res) => {
  return res.render('pages/posts');
};
ctrl.newPost = (req, res) => {
  return res.render('pages/new-post');
};
ctrl.singlePost = (req, res) => {
  return res.render('pages/single-post');
};

module.exports = ctrl;
const PostService = require('../services/posts');

let ctrl = {};

ctrl.create = async (req, res) => {
  const post = req.body;
  try {
    const result = await PostService.create(post);
    return res.status(201).json(result);
  } catch (error) {
    return next(error.message);
  }
};

module.exports = ctrl;
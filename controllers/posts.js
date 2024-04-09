const PostService = require('../services/posts');

let ctrl = {};

ctrl.create = async (req, res) => {
  const post = req.body;
  try {
    const result = await PostService.create(post);
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

ctrl.getById = async (req, res) => {
  const {id} = req.params;
  try {
    const result = await PostService.findById(id);
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

ctrl.getLatest = async (req, res) => {
  const {qty} = req.params;
  try {
    const result = await PostService.getLatestPosts(qty);
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

ctrl.delete = async (req, res) => {
  const {id} = req.params;
  try {
    const result = await PostService.delete(id);
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

module.exports = ctrl;
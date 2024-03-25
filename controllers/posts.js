const PostDbService = require('../db/post');

let ctrl = {};

ctrl.create = async (req, res) => {
  const post = req.body;
  try {
    const result = await PostDbService.create(post);
    return res.status(201).json(result);
  } catch (error) {
    return next(error.message);
  }
};

module.exports = ctrl;
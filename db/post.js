const PostModel = require('../models/post');

const obj = {

};

obj.create = async (post) => {
  try {
    return await PostModel.create(post);
  } catch (error) {
    throw new Error(error);
  }
};

obj.getLatestPosts = async (qty) => {
  try {
    return await PostModel.find().sort({date: -1}).limit(qty);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = obj;
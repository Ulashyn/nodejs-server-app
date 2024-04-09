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

obj.findById = async (id) => {
  try {
    return await PostModel.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

obj.delete = async (id) => {
  try {
    return await PostModel.deleteOne({_id: id});
  } catch (error) {
    throw new Error(error);
  }
};

obj

module.exports = obj;
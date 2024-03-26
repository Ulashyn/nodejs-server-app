const PostDbService = require('../db/post');

module.exports = {
  create: async(post) => {
    try {
      return PostDbService.create(post);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getLatestPosts: async(qty) => {
    try {
      return PostDbService.getLatestPosts(qty);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
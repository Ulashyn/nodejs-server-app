const PostDbService = require('../db/post');

module.exports = {
  create: async(post) => {
    try {
      return PostDbService.create(post);
    } catch (error) {
      throw new Error(error);
    }
  },
  edit: async(post) => {
    try {
      return PostDbService.edit(post);
    } catch (error) {
      throw new Error(error);
    }
  },
  getLatestPosts: async (qty) => {
    try {
      return PostDbService.getLatestPosts(qty);
    } catch (error) {
      throw new Error(error);
    }
  },
  findById: async (id) => {
    try {
      return PostDbService.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  },
  delete: async (id) => {
    try {
      return PostDbService.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
};
const mongoose = require('mongoose');
const postDb = require('../../../db/post');
const Post = require('../../../models/post');
const sinon = require('sinon');

const postMock = {
  title: 'test post 1',
  description: 'test post 1',
  content: 'test post 1',
  _id: '66020bb52d8acd236a7a792f'
};
const postsMock = [postMock, postMock, postMock];
const qty = 6;

describe('Posts', () => {
  afterEach(() => {
    sinon.restore();
  });
  describe('Create', () => {
    it('Should create', async () => {
      sinon.stub(Post, 'create').resolves(postMock);
      let result = await postDb.create(postMock);
      expect(result.content).toBe(postMock.content);
    });
    it('Should throw error', async () => {
      sinon.stub(Post, 'create').rejects({message: 'Error'});
      await expect(postDb.create(postMock)).rejects.toThrow();
    });
  });
  describe('FindById', () => {
    it('Should find by Id', async () => {
      sinon.stub(Post, 'findById').resolves(postMock);
      let result = await postDb.findById(postMock._id);
      expect(result.content).toBe(postMock.content);
    });
    it('Should throw error', async () => {
      sinon.stub(Post, 'findById').rejects({message: 'Error'});
      await expect(postDb.findById(postMock._id)).rejects.toThrow();
    });
  });
  describe('GetLatestPosts', () => {
    it('Should find latest', async () => {
      sinon.stub(Post, 'find').callsFake(() => {
        return {
          sort: () => {
            return {
              limit: sinon.stub().resolves(postsMock)
            }
          }
        }
      });
      let result = await postDb.getLatestPosts(qty);
      expect(new Set(result)).toContain(postMock);
    });
    it('Should throw error', async () => {
      sinon.stub(Post, 'find').callsFake(() => {
        return {
          sort: () => {
            return {
              limit: sinon.stub().rejects({message: 'Error'})
            }
          }
        }
      });
      await expect(postDb.getLatestPosts(qty)).rejects.toThrow();
    });
  });
});
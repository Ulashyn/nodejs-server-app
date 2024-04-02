const postService = require('../../../services/posts');
const postDbService = require('../../../db/post');
const sinon = require('sinon');

const postMock = {
  title: 'test post 1',
  description: 'test post 1',
  content: 'test post 1',
  _id: '66020bb52d8acd236a7a792f'
};
const postsMock = [postMock, postMock, postMock];
const qty = 6;

describe('Post Service', () => {
  afterEach(() => {
    sinon.restore();
  });
  describe('Create', () => {
    it('Should create', async () => {
      sinon.stub(postDbService, 'create').resolves({title: postMock.title});
      let result = await postService.create({title: postMock.title});
      expect(result.title).toBe(postMock.title);
    });
    it('Should throw error', async () => {
      sinon.stub(postDbService, 'create').rejects({message: 'Error'});
      await expect(postService.create({title: postMock.title})).rejects.toEqual({message: 'Error'});
    });
  });
  describe('FindById', () => {
    it('Should find by Id', async () => {
      sinon.stub(postDbService, 'findById').resolves(postMock);
      let result = await postService.findById(postMock._id);
      expect(result.title).toBe(postMock.title);
    });
    it('Should throw error', async () => {
      sinon.stub(postDbService, 'findById').rejects({message: 'Error'});
      await expect(postService.findById(postMock._id)).rejects.toEqual({message: 'Error'});
    });
  });
  describe('GetLatestPosts', () => {
    it('Should find latest', async () => {
      sinon.stub(postDbService, 'getLatestPosts').resolves(postsMock);
      let result = await postService.getLatestPosts(qty);
      expect(new Set(result)).toContain(postMock);
    });
    it('Should throw error', async () => {
      sinon.stub(postDbService, 'getLatestPosts').rejects({message: 'Error'});
      await expect(postService.getLatestPosts(qty)).rejects.toEqual({message: 'Error'});
    });
  });
});
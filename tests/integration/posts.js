const server = require('../../loaders/index');
const express = require('express');
const expressApp = express();
const supertest = require('supertest');

const qty = 6;
let post = {};

describe('Post endpoinds', () => {
  describe('POST /api/create-post', () => {
    it('Should create post', async () => {
      const app = await server({expressApp});
      const res = await supertest(app).post('/api/create-post')
      .send({
        title: 'Supertest title',
        description: 'Supertest description',
        content: 'Supertest content'
      });
      post = res.body;
      expect(res.statusCode).toEqual(201);
      expect(res.body.content).toBe('Supertest content');
    });
    it('Should return 400', async () => {
      const app = await server({expressApp});
      const res = await supertest(app).post('/api/create-post')
      .send({
        title: 'Supertest title',
        description: 'Supertest description',
        content: 'content'
      });
      expect(res.statusCode).toEqual(400);
      expect(res.body.payload.error).toEqual('Bad Request');
    });
  });
  describe('GET /api/post:id', () => {
    it('Should get post by id', async () => {
      const app = await server({expressApp});
      const res = await supertest(app).get(`/api/post/${post._id}`);
      expect(res.statusCode).toEqual(201);
      expect(res.body.content).toBe(post.content);
    });
  });
  describe('GET /api/latest-posts', () => {
    it('Should get latest posts by quantity', async () => {
      const app = await server({expressApp});
      const res = await supertest(app).get(`/api/latest-posts/${qty}`);
      expect(res.statusCode).toEqual(201);
      expect(new Set(res.body)).toContainEqual(post);
    });
  });
  describe('DELETE /api/delete:id', () => {
    it('Should delete post by id', async () => {
      const app = await server({expressApp});
      const res = await supertest(app).delete(`/api/delete-post/${post._id}`);
      expect(res.statusCode).toEqual(201);
      expect(res.body.deletedCount).toEqual(1);
    });
  });
});
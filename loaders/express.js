const path = require('path');
const express = require('express');
const Boom = require('@hapi/boom');
const iuRouter = require('../routes/ui');
const postRouter = require('../routes/posts');
const {toDateString} = require('../utils/dates');

const expressLoader = async ({ app }) => {
  // json/form middlewares
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  // static files
  app.use(express.static(path.join(__dirname, '../public')));
  // set locals
  app.locals.toDateString = toDateString;
  // set view engine
  app.set('view engine', 'pug');
  app.use('/', iuRouter);
  app.use('/api', postRouter);
  // centralized error handler
  app.use((err, req, res, next) => {
    return res.send(Boom.boomify(err, {message: err, statusCode: 500}));
  });
  return app;
}

module.exports = expressLoader;
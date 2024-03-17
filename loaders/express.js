const path = require('path');
const express = require('express');
const iuRouter = require('../routes/ui');

const expressLoader = async ({ app }) => {
  // static files
  app.use(express.static(path.join(__dirname, '../public')));
  // set view engine
  app.set('view engine', 'pug');
  app.use('/', iuRouter)
  return app;
}

module.exports = expressLoader;
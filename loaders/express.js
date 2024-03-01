const expressLoader = async({app}) => {
  // set view engine
  app.set('view engine', 'pug');
  // set main route
  app.get('/', (req, res, next) => {
    return res.send('Hayoken!');
  });
  return app;
}

module.exports = expressLoader;
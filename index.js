const express = require('express');
const expressApp = express();
const initLoader = require('./loaders/index');
const PORT = process.env.PORT || 3000;

startServer = async() => {
  try {
    const app = await initLoader({expressApp});
    app.listen(PORT, (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log('Server online');
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

startServer();
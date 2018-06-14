import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express(); // start up Express
const compiler = webpack(config); // start up webpack using the config file specified

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false, // no output on the command line
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler)); // sets up hot reloading

app.get('*', function(req, res) { // bc this is a single-page app, all requests load index.html
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) { // start up Express, listen on our port
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`); // opens browser to port
  }
});
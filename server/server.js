const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import { StaticRouter as Router, matchPath } from 'react-router';
const mediumController = require('./../database/controllers/mediumController.js')

const port = process.env.PORT || 3000;

// const mongoURI = 'mongodb://jerryjong:1qaz2wsx@ds133104.mlab.com:33104/personal'
// mongoose.connect(mongoURI);

app.use(express.static(__dirname + './../')); // serves index.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + './../index.html'));
})

app.get('/webdev.jpg', (req, res) => {
  res.sendFile(path.join(__dirname + 'webdev.jpg'))
})

function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>MedCircleTakehome</title>
        <link rel="stylesheet" href="/src/style/style.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      </head>
      <body>
        <div class="root">${html}</div>       
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/build/bundle.js"></script>
        <script src="/static/logo.svg"></script>
        <script src="/static/logo2.svg"></script>        
      </body>
    </html>
    `;
}

const preloadedState = {
  articles: [],
  topics: [],
  followedTopics: [],
};

function handleRender(req, res) {
  axios.get(ROOT_ARTICLE_URL)
    .then((response) => {
      preloadedState.articles = response.data;
    })
    .then(() => {
      axios.get(ROOT_TOPIC_URL)
        .then((response) => {
          preloadedState.topics = response.data;
          preloadedState.followedTopics = response.data;

          const store = configureStore(preloadedState);

          let foundPath = null;
          let { path, component } = routeBank.routes.find(
            ({ path, exact }) => {
              foundPath = matchPath(req.url,
                {
                  path,
                  exact,
                  strict: false,
                },
              );
              return foundPath;
            }) || {};
          if (!component) component = {};
          const context = {};
          const html = renderToString(
            <Provider store={store}>
              <Router context={context} location={req.url}>
                <Application />
              </Router>
            </Provider>,
          );
          res.send(renderFullPage(html, preloadedState));
        });
    });
}

// app.get('/grabbing/blogs/rah', mediumController.getBlogs);
// app.get('/api/medium', mediumController.findBlogs);

app.listen(port, () => {
  console.log('App now listening on ' + port)
})
const Medium = require('./../models/medium.js');
const parser = require('rss-parser');
const mediumController = {};

mediumController.getBlogs = (req, res) => {
  console.log('getting blogs')
  parser.parseURL('https://medium.com/feed/@jerryjong01', function (err, rss) {
      if (err) {
          console.log(err);
      }
      console.log(rss.feed.entries)
      rss.feed.entries.map(entry => {
        let newEntry = entry;
        Medium.create(newEntry);
      })
  });
}

mediumController.findBlogs = (req, res) => {
  console.log('finding blogs')
  Medium.find({}, (err, response) => {
    if (err) console.error(err)
    else {
      res.send(response)
    }
  })
}

module.exports = mediumController;
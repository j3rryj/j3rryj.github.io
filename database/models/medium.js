const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediumSchema = Schema({
  creator: String,
  title: String,
  link: String,
  pubDate: String,
  'content:encoded': String,
  'dc:creator': String,
  guid: String,
  categories: Array,
  isoDate: String,
})

module.exports = mongoose.model('Medium', mediumSchema);
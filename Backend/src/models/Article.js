const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  author: { type: String, required: true },
  publicationDate: { type: String, required: true },
  url: { type: String, required: true },
});

const Article = mongoose.model("Stories", ArticleSchema);

module.exports = Article;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Article = require("./models/Article"); 
const { scrapeDummyArticles, fetchMediumArticles } = require("./scraper");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
  })
);

const mongoURI =
  "mongodb+srv://rohit1995chourey:rohit321@nodeapp.r62ctns.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB Atlas");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB Atlas");
});

const dummyHtmlContent = `
 <div class="postArticle">
  <div class="mo mp mq mr ms mt mu mv mw mx">
    <a class="af ag ah ai aj ak al am an ao ap aq ar as at" href="/article-1">
      <h2 class="be jh my mz na nb nc nd ne nf ng nh ni nj nk nl nm nn no np nq nr ns nt nu nv nw ee ef eg ei ek bj">Article 1: Title</h2>
      <div class="nx">
        <h3 class="be b hk z ee ji ef eg jj ei ek fd">Article 1: Subtitle</h3>
        <span class="author">Author 1</span>
        <time datetime="2024-06-14">June 14, 2024</time>
      </div>
    </a>
  </div>
</div>

<div class="postArticle">
  <div class="mo mp mq mr ms mt mu mv mw mx">
    <a class="af ag ah ai aj ak al am an ao ap aq ar as at" href="/article-2">
      <h2 class="be jh my mz na nb nc nd ne nf ng nh ni nj nk nl nm nn no np nq nr ns nt nu nv nw ee ef eg ei ek bj">Article 2: Title</h2>
      <div class="nx">
        <h3 class="be b hk z ee ji ef eg jj ei ek fd">Article 2: Subtitle</h3>
        <span class="author">Author 2</span>
        <time datetime="2024-06-13">June 13, 2024</time>
      </div>
    </a>
  </div>
</div>

<div class="postArticle">
  <div class="mo mp mq mr ms mt mu mv mw mx">
    <a class="af ag ah ai aj ak al am an ao ap aq ar as at" href="/article-3">
      <h2 class="be jh my mz na nb nc nd ne nf ng nh ni nj nk nl nm nn no np nq nr ns nt nu nv nw ee ef eg ei ek bj">Article 3: Title</h2>
      <div class="nx">
        <h3 class="be b hk z ee ji ef eg jj ei ek fd">Article 3: Subtitle</h3>
        <span class="author">Author 3</span>
        <time datetime="2024-06-12">June 12, 2024</time>
      </div>
    </a>
  </div>
</div>

<div class="postArticle">
  <div class="mo mp mq mr ms mt mu mv mw mx">
    <a class="af ag ah ai aj ak al am an ao ap aq ar as at" href="/article-4">
      <h2 class="be jh my mz na nb nc nd ne nf ng nh ni nj nk nl nm nn no np nq nr ns nt nu nv nw ee ef eg ei ek bj">Article 4: Title</h2>
      <div class="nx">
        <h3 class="be b hk z ee ji ef eg jj ei ek fd">Article 4: Subtitle</h3>
        <span class="author">Author 4</span>
        <time datetime="2024-06-11">June 11, 2024</time>
      </div>
    </a>
  </div>
</div>

<div class="postArticle">
  <div class="mo mp mq mr ms mt mu mv mw mx">
    <a class="af ag ah ai aj ak al am an ao ap aq ar as at" href="/article-5">
      <h2 class="be jh my mz na nb nc nd ne nf ng nh ni nj nk nl nm nn no np nq nr ns nt nu nv nw ee ef eg ei ek bj">Article 5: Title</h2>
      <div class="nx">
        <h3 class="be b hk z ee ji ef eg jj ei ek fd">Article 5: Subtitle</h3>
        <span class="author">Author 5</span>
        <time datetime="2024-06-10">June 10, 2024</time>
      </div>
    </a>
  </div>
</div>
`;


app.post("/scrape", async (req, res) => {
  try {
    const articles = await scrapeDummyArticles(dummyHtmlContent);
    await Article.deleteMany({});
    await Article.insertMany(articles);
    res.json(articles);
  } catch (error) {
    console.error("Scraping failed:", error);
    res.status(500).json({ error: "Scraping failed" });
  }
});

app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find({});
    res.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

app.get("/medium/:topic", async (req, res) => {
  try {
    const topic = req.params.topic;
    const articles = await fetchMediumArticles(topic);
    res.json(articles);
  } catch (error) {
    console.error("Fetching Medium articles failed:", error);
    res.status(500).json({ error: "Fetching Medium articles failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

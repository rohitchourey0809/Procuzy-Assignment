const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeDummyArticles(htmlContent) {
  try {
    const $ = cheerio.load(htmlContent);

    const articles = $(".postArticle")
      .map((index, element) => {
        const title = $(element).find("h2").text().trim();
        const subTitle = $(element).find("h3").text().trim();
        const author = $(element).find(".author").text().trim();
        const publicationDate = $(element).find("time").attr("datetime").trim();
        const url = $(element).find("a").attr("href").trim();

        return { title, subTitle, author, publicationDate, url };
      })
      .get();

    return articles;
  } catch (error) {
    console.error("Scraping failed:", error);
    throw error;
  }
}

async function fetchMediumArticles(topic) {
  try {
    const response = await axios.get(`https://medium.com/feed/tag/${topic}`);
    const $ = cheerio.load(response.data, { xmlMode: true });

    const articles = $("item")
      .map((index, element) => {
        const title = $(element).find("title").text().trim();
        const author = $(element).find("creator").text().trim(); // <dc:creator> in RSS feed
        const publicationDate = $(element).find("pubDate").text().trim();
        const url = $(element).find("link").text().trim();

        return { title, author, publicationDate, url };
      })
      .get()
      .slice(0, 5); // Get only the first 5 articles

    return articles;
  } catch (error) {
    console.error("Fetching Medium articles failed:", error);
    throw error;
  }
}

module.exports = { scrapeDummyArticles, fetchMediumArticles };

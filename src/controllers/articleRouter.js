import express from 'express';
import ArticleService from '../services/crawler';

let articleRouter = express.Router();

articleRouter.get('/crawl', async (req, res) => {
  try {
    const crawler = await Crawler.scrape.getAll();
    // For CORS. 
    res.set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
})
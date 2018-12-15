import express from 'express';
import Crawler from '../services/crawler';

let articleRouter = express.Router();

articleRouter.get('/crawl', async (req, res) => {
  try {
    const crawler = await Crawler.scrape.getAndSaveFromSites();
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
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import colors from 'colors';

function crawler() {
  this.scrape = {
    /**
     * @description There maybe many articles in a webpage. This function crawls gathers all articleUrls in one webpage
     */
    getArticleUrlsFromSite: async () => {

    },
    /**
     * @description Loads an article Url and reads and shape it's content
     */
    getContentFromSites: async (crawlParams) => {
      const {
        articleUrls,
        articlePrependUrl,
        articleHeaderSelector,
        articleDateSelector,
        articleTextSelector,
        hasWriter,
        hasHeader,
        hasDate
      } = crawlParams;

    },
    /**
    * @description Reads an array of sites to crawl and save to DB
    */
    getAndSaveFromSites: async (sites) => {
      for (let i = 0; i < sites.length; i++) {
        const site = sites[i];
        // 1. Get all articleUrls from parent site
        // 2. For each articleUrl, scrape it's content & save
      }
    },
  }
}

const Crawler = new crawler();
export default Crawler;
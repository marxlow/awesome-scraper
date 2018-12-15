import '@babel/polyfill';
import express from 'express';

import connectToMongo from './utils/connectToMongo';
import articleRouter from './controllers/articleRouter';

if (process.env.NODE_ENV === 'local') {
  require('dotenv').config();
}

let app = express();

/* Set up apps with routers and their root URLs here */

// Starting up the server
app.listen(process.env.PORT, async (error) => {
  if (error) {
    console.log(`Error initializing server: ${error.message}`);
  }
  if (process.env.NODE_ENV === 'local') {
    console.log(`> Server is ready on "http://localhost:${process.env.PORT}"`);
  } else {
    console.log('> Server is ready & is running on production!');
  }

  await connectToMongo();
})

// To keep Heroku App alive
setInterval(function () {
  // https.get("https://herokuapp.com/");
}, 300000); // every 5 minutes (300000)


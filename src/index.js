import '@babel/polyfill';
import express from 'express';

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
})


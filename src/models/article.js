import mongoose from 'mongoose';

if (process.env.NODE_ENV === 'local') {
  require('dotenv').config();
}

const ArticleSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  article_url: String,
//   site_name: String,
//   site_url: String,
//   original_text: String,
//   original_header: String,
//   summarized: Boolean,
//   project: String,
//   date_written: String
});

const connection = mongoose.createConnection(process.env.MONGO_URL, { useNewUrlParser: true });
const Article = connection.model('articles', ArticleSchema);

export default Article;
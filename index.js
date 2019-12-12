import dotenv from 'dotenv';
import express from 'express';
import postsRouter from '../asnBackend/api/posts';
import bodyParser from 'body-parser';
import './db'
import loadTestPosts from './postData.js';

dotenv.config();

const app = express();

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/posts', postsRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});


if (process.env.seedDb) {
  loadTestPosts();
}
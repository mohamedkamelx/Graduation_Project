const express = require('express');
const postRouter = express.Router();

postRouter.get('/', (req, res) => {
  res.send('my feed posts service root');
});

postRouter.get('/:id', (req, res) => {
  res.send('post by id service root');
});

postRouter.get('/profile-posts/:id', (req, res) => {
  res.send('post for account by id service root');
});

postRouter.post('/', (req, res) => {
  res.send('create post service root');
});

postRouter.patch('/', (req, res) => {
  res.send('update post service root');
});

postRouter.delete('/', (req, res) => {
  res.send('create post service root');
});

module.exports = postRouter;
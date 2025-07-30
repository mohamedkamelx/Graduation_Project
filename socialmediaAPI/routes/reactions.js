const express = require('express');
const reactionRouter = express.Router();

reactionRouter.post('/', (req, res) => {
  res.send('react service root');
});

reactionRouter.post('/comment', (req, res) => {
  res.send('comment service root');
});

reactionRouter.post('/share', (req, res) => {
  res.send('share service root');
});

reactionRouter.delete('/comment', (req, res) => {
  res.send('react service root');
});

module.exports = reactionRouter;
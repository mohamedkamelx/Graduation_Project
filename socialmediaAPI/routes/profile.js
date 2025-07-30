const express = require('express');
const profileRouter = express.Router();

profileRouter.get('/', (req, res) => {
  res.send('all Users service root');
});

profileRouter.get('/:name', (req, res) => {
  res.send('search User by name service root');
});


profileRouter.get('/:id', (req, res) => {
  res.send('user x profile service root');
});


profileRouter.get('/me', (req, res) => {
  res.send('my profile service root');
});

profileRouter.patch('/me', (req, res) => {
  res.send('update my profile service');
});

profileRouter.delete('/me', (req, res) => {
  res.send('delete my profile service');
});



profileRouter.get('/friends', (req, res) => {
  res.send('my friends service root');
});

profileRouter.post('/friends', (req, res) => {
  res.send('send friend request service');
});

profileRouter.delete('/delete-friend', (req, res) => {
  res.send('remove friend service');
});



profileRouter.post('/accept-friend', (req, res) => {
  res.send('accept or decline friend request service');
});


module.exports = profileRouter;
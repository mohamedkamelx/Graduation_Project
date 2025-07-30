const express = require('express');
const notificationRouter = express.Router();

notificationRouter.get('/', (req, res) => {
  res.send('notifications get all my notifications then delete service root');
});


module.exports = notificationRouter;
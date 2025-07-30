const express = require("express");
const myroute = express.Router();


const userRouter = require('./routes/auth');
const postRouter = require('./routes/posts');
const reactionRouter = require('./routes/reactions');
const notificationRouter = require('./routes/notifications');
const profileRouter = require('./routes/profile');

myroute.use('/users', userRouter);
myroute.use('/profile', profileRouter);
myroute.use('/posts', postRouter);
myroute.use('/react', reactionRouter);
myroute.use('/notification', notificationRouter);

module.exports = myroute;
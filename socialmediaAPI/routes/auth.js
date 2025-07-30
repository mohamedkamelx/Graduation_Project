const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models/Schema');
const userRouter = express.Router();
const bcrypt = require('bcryptjs');
const JWT_SECRET = process.env.JWT_SECRET;

userRouter.post('/register', async (req, res) => {
  const {username,password} = req.body
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ error: `${err}` });
  }
  res.send('register service');
});

userRouter.post('/login', async (req, res) => {
  const {username,password} = req.body
  try {
    const user = await User.findOne({ username });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ error: 'Invalid username or password' });
    }else{
      token = jwt.sign({username:username},JWT_SECRET,{expiresIn:'1h'})
      res.status(201).json({ token:token})
    }
  } catch (err) {
    res.status(400).json({ error: `${err}` });
  }
});

userRouter.post('/logout', (req, res) => {
  res.send('logout service');
});


userRouter.post('/token/refresh', (req, res) => {
  res.send('refresh jwt token service');
});


module.exports = userRouter;
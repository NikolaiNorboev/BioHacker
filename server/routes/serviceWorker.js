import express from 'express';
import webpush from 'web-push';

const route = express.Router();

route.post('/subscribe', (req, res) => {
  const subscription = req.body;
  console.log(subscription);
  // send 201
  res.status(201).json({});
});

export default route;

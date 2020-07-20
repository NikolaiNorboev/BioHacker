/* eslint-disable import/extensions */
import express from 'express';
import startPocess from '../workers/start-process.js';

const route = express.Router();

// ручка подписки клиента на пушки
route.post('/subscribe', async (req, res) => {
  const subscription = req.body;
  console.log(subscription);
  // send 201
  // TODO: Добавить сохранение в БД ключей от пушей клиента

  // start process
  // const result = await startPocess(subscription);
  // console.log(result);
  res.status(201).json({});
});

export default route;

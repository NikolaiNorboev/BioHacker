import ZB from 'zeebe-node';
import webpush from 'web-push';
import dotenv from 'dotenv';

dotenv.config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails(
  process.env.EMAIL,
  publicVapidKey,
  privateVapidKey,
);

const subscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/d3aFki49g0E:APA91bGzu88_BuKQV5_SrGo0bx4O6d5-ANVyQmauJOYSFEp0rLkCYptmwYwFmy2zYHJA1Rwb0w3e-5vH9vEwQjkEII2njuWAAMTS3v52WBJtotbMnNmfXQgu4KtYMKJjvuS2-UN_vB6Z',
  expirationTime: null,
  keys: {
    p256dh:
      'BGNwezkm4h-vHxot_TOhAbqhFVWcC4LM6GfekfCX82g09u1Mqyy0cjWm_Zh2sUg4f6EaLgPwMgJRUb1aYNjMR8s',
    auth: 'htfxjAU9_aKadQH7HfPz6Q',
  },
};

const payload = JSON.stringify({
  title: 'Пуш из Node js',
  body: 'Привет!!!!',
  icon:
    'http://biohackacademy.github.io/biofactory/graphics/biohack_academy_logo.png',
});

async function sendPush(subscription, payload) {
  return webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.log(err));
}

// Job worker
async function handler(job, complete, worker) {
  worker.log('Task variables', job.variables);
  console.log(job.variables);

  // Task worker business logic goes here
  const result = await sendPush(subscription, payload);
  console.log(result);
  const updateToBrokerVariables = {
    t_message: result.message_id,
  };
  complete.success(updateToBrokerVariables);
}

const zbc = new ZB.ZBClient();
const zbworker = zbc.createWorker('send-push', handler);

export default zbworker;

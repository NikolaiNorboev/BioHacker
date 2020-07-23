import dotenv from 'dotenv';
import ZB from 'zeebe-node';
import moment from 'moment';
import Course from '../models/course.js';

dotenv.config();

// Job worker
async function handler(job, complete, worker) {
  worker.log('Task variables', job.variables);

  const nextEvent = await getNextEvent(job.variables.data.user_id);
  console.log('>>>>>>>>>>>>>>>>>>>>>>', nextEvent);
  if (nextEvent.nextEventTime) {
    const updateToBrokerVariables = {
      nextEventTime: nextEvent.nextEventTime,
      event: nextEvent.event,
    };
    complete.success(updateToBrokerVariables);
  } else {
    const updateToBrokerVariables = { isEventEnded: true };
    complete.success(updateToBrokerVariables);
  }
  // Task worker business logic goes here
  // if (job.variables.count === 1) {
  //   const updateToBrokerVariables = {
  //     isEventEnded: true,
  //   };
  //   complete.success(updateToBrokerVariables);
  // } else {
  //   const updateToBrokerVariables = {
  //     count: 1,
  //   };
  //   complete.success(updateToBrokerVariables);
  // }
}

// Worker connection settings
const zbc = new ZB.ZBClient({
  camundaCloud: {
    clientId: process.env.ZEEBE_CLIENT_ID,
    clientSecret: process.env.ZEEBE_CLIENT_SECRET,
    clusterId: process.env.ZEEBE_CLUSTER_ID,
  },
});
const zbworker = zbc.createWorker('get-nextEvent', handler);

async function getNextEvent(id) {
  const currentDate = new Date();
  const course = await Course.findOne({user: id}).sort({start: 1});
  if (course) {
    const event = course.events.find(event => new Date(event.start) > currentDate);

    const result = moment.utc(moment(currentDate.toLocaleString(),"DD/MM/YYYY HH:mm:ss")
    .diff(moment(new Date(event.start).toLocaleString(),"DD/MM/YYYY HH:mm:ss")))
    .format("HH:mm:ss");
    return {
      event,
      nextEventTime: 'PT' + result.slice(0, 1) + 'H' + result.slice(3, 4) + 'M',
    };
  };
}

export default zbworker;

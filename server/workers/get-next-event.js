import dotenv from 'dotenv';
import ZB from 'zeebe-node';

dotenv.config();

// Job worker
async function handler(job, complete, worker) {
  worker.log('Task variables', job.variables);

  // Task worker business logic goes here
  if (job.variables.count === 1) {
    const updateToBrokerVariables = {
      isEventEnded: true,
    };
    complete.success(updateToBrokerVariables);
  } else {
    const updateToBrokerVariables = {
      count: 1,
    };
    complete.success(updateToBrokerVariables);
  }
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

export default zbworker;

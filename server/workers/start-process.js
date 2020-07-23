// https://docs.zeebe.io/
import dotenv from 'dotenv';
import zeebe from 'zeebe-node';

dotenv.config();

// Start new process instance
async function startProcess(push, channel) {
  const zbc = new zeebe.ZBClient({
    camundaCloud: {
      clientId: process.env.ZEEBE_CLIENT_ID,
      clientSecret: process.env.ZEEBE_CLIENT_SECRET,
      clusterId: process.env.ZEEBE_CLUSTER_ID,
    },
  });
  const result = await zbc.createWorkflowInstance('Process_0stgo3g', {
    push,
    channel: 'push',
    programmStartDate: 'PT15S',
  });
  return result;
}

export default startProcess;

import dotenv from 'dotenv';
import zeebe from 'zeebe-node';

dotenv.config();

// Start new process instance
async function startProcess(name, program, pushKey, auth, endpoint) {
  const zbc = new zeebe.ZBClient({
    camundaCloud: {
      clientId: process.env.ZEEBE_CLIENT_ID,
      clientSecret: process.env.ZEEBE_CLIENT_SECRET,
      clusterId: process.env.ZEEBE_CLUSTER_ID,
    },
  });
  const result = await zbc.createWorkflowInstance('Process_1jbwj1x', {
    name,
    program,
    pushKey,
    auth,
    endpoint,
    channel: 'push',
  });
  return result;
}

export default startProcess;

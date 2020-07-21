// https://docs.zeebe.io/
import zeebe from 'zeebe-node';

// Start new process instance
async function startProcess(name, program, pushKey, auth, endpoint) {
  const zbc = new zeebe.ZBClient('localhost:26500');
  const result = await zbc.createWorkflowInstance('Process_1jbwj1x', {
    name,
    program,
    pushKey,
    auth,
    endpoint,
  });
  return result;
}

export default startProcess;

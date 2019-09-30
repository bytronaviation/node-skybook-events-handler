const fastify = require('fastify')({logger: true});
const validateData = require('./src/validateData');
const saveData = require('./src/saveData');
const config = require('config');
const portNumber = config.get('portNumber') || 3000;
const saveFolder = config.get('saveLocation') || './';

fastify.get('/', () => 'OK');

fastify.post('/process', async (request, response) => {
  fastify.log.info(`Skybook event handler: Received request at ${Date.now()}.`);
  if (validateData(request.body)) {
    throw new Error('Data is not in the correct format');
  }
  saveData(request.body, saveFolder);
  fastify.log.info(`Skybook event handler: Completed request at ${Date.now()}.`);
  response.status(200);

  return 'Success';
});

async function start() {
  try {
    await fastify.listen(portNumber);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();

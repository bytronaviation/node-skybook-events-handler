const fastify = require('fastify')({logger: true});
const validateData = require('./src/validateData');
const saveData = require('./src/saveData');
const config = require('config');
const portNumber = config.get('portNumber') || 3000;

fastify.get('/', () => 'OK');

fastify.post('/process', async (_request, response) => {
  fastify.log.info(`Skybook event handler: Received request at ${Date.now()}.`);
  const isValid = validateData(_request.body);
  if (!isValid) {
    throw new Error('Data is not in the correct format');
  }
  saveData(_request.body);
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

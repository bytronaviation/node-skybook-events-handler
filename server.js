const fastify = require('fastify')({ logger: true });
const validateData = require('./src/validateData');

fastify.get('/', () => 'OK');

fastify.post('/process', async (_request, response) => {
    fastify.log.info(`Skybook event handler: Received request at ${Date.now()}.`);
    validateData.validateData(_request.body);
    fastify.log.info(`Skybook event handler: Completed request at ${Date.now()}.`);
    response.status(200);

    return 'Success';
});

async function start() {
    try {
        await fastify.listen(3003);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();

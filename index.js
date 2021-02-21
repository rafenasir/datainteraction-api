'use strict';
const routes = require("./routes")
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

const init = async() => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost",
        routes: { cors: { origin: ['*'] } }
    });

    const swaggerOptions = {
        info: {
            title: 'Test API Documentation',
            version: Pack.version,
        },
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);



    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
    console.log('documentation is running on %s', server.info.uri + '/documentation');

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

//tested GIT again and again
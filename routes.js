const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Joi = require("joi");
module.exports = [{
        method: "GET",
        path: "/api/news",
        options: {
            handler: async(request, resp) => {
                try {
                    const news = await prisma.news.findMany();
                    return resp.response(news);
                } catch (e) {
                    console.log(e);
                    throw new Error(e);
                }
            },
            tags: ["api"],
        },
    },
    {
        method: 'GET',
        path: '/api/about_us',
        options: {
            handler: (request, response) => {
                // get this from database
                return { title: "about us", body: "this is about us page" };
            },

            tags: ['api'],
        }
    },
    {
        method: 'GET',
        path: '/api/contact_us',
        handler: (request, response) => {
            // get this from database
            return { title: "contact us", body: "this is contact us page" };
        }
    },
    {
        method: 'POST',
        path: '/api/news',
        options: {
            handler: async(req, resp) => {
                // get this from database
                const data = req.payload
                console.log({ data });

                // save post body into db and return it
                try {
                    const news = await prisma.news.create({ data })
                    return news;

                } catch (e) {
                    console.log(e);
                    throw new Error(e)
                }
            },
            tags: ["api"],
            validate: {
                payload: Joi.object({
                    title: Joi.string().required(),
                    body: Joi.string().required(),
                }).label("disconnectUserLocation"),
            },

        }
    },
    {
        method: 'POST',
        path: '/api/contact_us',
        handler: (request, response) => {
            const postresponse = request.body
            console.log({ postresponse });
            return postresponse;
        }
    },

    {
        method: 'POST',
        path: '/api/about_us',
        handler: (request, response) => {
            const postresponse = request.body
            console.log(postresponse);
            return postresponse;
        }
    },

    {
        method: 'PUT',
        path: '/api/news',
        options: {
            handler: (reequest, h) => {
                //get this from data base.
                const postbody = request.body;

                //save this post body into db and return it
                return postbody
            }
        }


    },
    {
        method: 'DELETE',
        path: '/api/news',
        handler: (reequest, h) => {
            //get this from data base.
            const postbody = request.body;

            //save this post body into db and return it
            return postbody
        }
    },
]
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Joi = require("joi");
const handler = require("./handler")
module.exports = [{
        method: "GET",
        path: "/api/news",
        options: {
            handler: async(req, resp) => {
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
        method: 'POST',
        path: '/api/news',
        options: {
            handler: handler.postNews,
            tags: ['api'],

            validate: {
                payload: Joi.object({
                    title: Joi.string().required(),
                    body: Joi.string().required(),
                }).label("postNews"),
            },
        },
    },

    {
        method: 'PUT',
        path: '/api/news',
        options: {
            handler: handler.putNews,
            tags: ['api'],
            validate: {
                payload: Joi.object({
                    id: Joi.string().required(),
                    title: Joi.string().required(),
                    body: Joi.string().required(),
                }).label("putNews"),
            },
        },
    },

    {
        method: 'DELETE',
        path: '/api/news',
        options: {
            handler: handler.deleteNews,
            tags: ['api'],

            validate: {
                payload: Joi.object({
                    id: Joi.string().required(),
                }).label("deleteNews"),
            }
        },
    },
    { //Individual News ID
        method: "GET",
        path: "/api/news/{id}",
        options: {
            handler: async(req, resp) => {
                try {
                    const individualNews = await prisma.news.findOne({
                        where: {
                            id: req.params.id
                        }
                    })
                    return resp.response(individualNews);
                } catch (e) {
                    console.log(e);
                    throw new Error(e);
                }
            },
            tags: ["api"],
            validate: {
                params: Joi.object({
                    id: Joi.string().required(),
                }).label("individualNews"),
            },
        },


    },


    {
        method: 'GET',
        path: '/api/about_us',
        options: {
            handler: async(req, resp) => {
                try {
                    const aboutUs = await prisma.aboutUS.findMany();
                    return resp.response(aboutUs);
                } catch (e) {
                    console.log(e);
                    throw new Error(e);
                }
            },
            tags: ["api"],
        }
    },

    {
        method: 'POST',
        path: '/api/about-us',
        options: {
            handler: handler.postAboutUs,
            tags: ['api'],

            validate: {
                payload: Joi.object({
                    body: Joi.string().required(),
                }).label("postAboutUs"),
            },
        }

    },

    {
        method: 'GET',
        path: '/api/contact_us',
        options: {
            handler: async(req, resp) => {
                try {
                    const contactUs = await prisma.contactUs.findMany();
                    return resp.response(contactUs);
                } catch (e) {
                    console.log(e);
                    throw new Error(e);
                }
            },
            tags: ["api"],
        }
    },

    {
        method: 'POST',
        path: '/api/contact-us',
        options: {
            handler: handler.postContactUs,
            tags: ['api'],

            validate: {
                payload: Joi.object({
                    title: Joi.string().required(),
                    body: Joi.string().required(),
                }).label("postContactUs"),
            },
        }

    },

]
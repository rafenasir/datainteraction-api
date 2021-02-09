const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function postNews(req, resp) {
    // get this from database
    const data = req.payload;
    console.log({ data });

    // save post body into db and return it
    try {
        const news = await prisma.news.create({ data })
        return resp.response(news)

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
}

async function putNews(req, resp) {
    try {
        const news = await prisma.news.update({
            where: {
                id: req.payload.id
            },
            data: {
                title: req.payload.title,
                body: req.payload.body,
            }
        });
        return resp.response(news)
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
}

async function deleteNews(req, resp) {
    try {
        const news = await prisma.news.delete({
            where: {
                id: req.payload.id
            }
        });
        return resp.response(news)

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
}

async function postAboutUs(req, resp) {
    // get this from database
    const data = req.payload;
    console.log({ data });

    // save post body into db and return it
    try {
        const about = await prisma.aboutUS.create({ data })
        return resp.response(data)

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
}

async function postContactUs(req, resp) {
    // get this from database
    const data = req.payload;
    console.log({ data });

    // save post body into db and return it
    try {
        const contact = await prisma.contactUs.create({ data });
        return resp.response(data)

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
}

module.exports = {
    postNews,
    putNews,
    deleteNews,
    postAboutUs,
    postContactUs
}
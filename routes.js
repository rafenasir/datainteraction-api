module.exports = [{
        method: 'GET',
        path: '/api/news',
        options: {
            handler: (request, response) => {
                // get this from database
                return [{ "id": 10, "value": 10, "name": "nosherwan testing" }, { "id": 11, "value": 6, "name": "abcd" }, { "id": 12, "value": 5, "name": "3443" }, { "id": 13, "value": 2, "name": "asdasdasdasd" }];
            },
            tags: ['api'],

        }

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
        handler: (request, response) => {
            // get this from database
            const postbody = request.body
            console.log({ postbody });
            // save post body into db and return it

            return postbody;
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
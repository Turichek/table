const { Router } = require('express');
const fetch = require('node-fetch');
const routes = Router();

routes.post(
    '/get',
    async (req, res) => {
        try {
            const { page } = req.body;
            console.log(page);
            const data = await fetch("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=" + page * 20)
                .then(response => response.json());

            res.status(200).send(data);
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
)

module.exports = routes;
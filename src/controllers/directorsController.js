const { Director } = require('../data/models')

module.exports = {
    async getAll(req, res) {
        try {
            const directors = await Director.findAll();
            const status = 200;
            const results = directors.length;
            return res.status(status).json({ status, results, data: directors });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
    async getOne(req, res) {
        try {
            const director = await Director.findByPk(req.params.id, {include: [{all: true}]});
            const status = 200;
            return res.status(status).json({ status, data: director });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
}
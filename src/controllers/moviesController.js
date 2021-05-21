const {Movie, Actor} = require('../data/models')

module.exports = {
    async main(req, res) {
        try {
            const movies = await Movie.findAll();
            return res.status(200).json({
                metadata: {
                    status: 200,
                },
                data: {
                    ...movies
                }
            })
        } catch (error) {
            return res.json(error)
        }
    },
}
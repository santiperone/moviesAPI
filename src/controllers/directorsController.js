const {Director} = require('../data/models')

module.exports = {
    async main(req, res) {
        try {
            const directors = await Director.findAll();
            return res.status(200).json({
                metadata: {
                    status: 200,
                },
                data: {
                    directors
                }
            })
        } catch (error) {
            return res.json(error)
        }
    },
}
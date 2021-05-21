const { Movie, Sequelize } = require('../data/models')
const Op = Sequelize.Op;

module.exports = {
    async main(req, res) {
        try {
            const movies = await Movie.findAll({
                where: {
                    [Op.or]: [
                      {title: {[Op.substring]: req.query.filter || '' }},
                      {summary: {[Op.substring]: req.query.filter || '' }},
                    ]
                },
                order: [req.query.order_by || 'id']
            });
            const results = movies.lenght;
            const status = 200;
            return res.status(200).json( { status, results, data: movies });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
}
module.exports = {
    main(req, res) {
        return res.status(200).json({
            metadata: {
                status: 200,
            },
            data: {
                body: 'Main Route'
            }
        })
    },
}
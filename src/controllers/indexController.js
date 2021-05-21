module.exports = {
    main(req, res) {
        return res.status(200).json({
            status: 200,
            message: 'Refer to the documentation to navigate the API',
            data: {}
        })
    },
}
module.exports = {
    main(req, res) {
        return res.status(200).json({
            status: res.status,
            data: {
                body: 'Shows Endpoint'
            }
        })
    },
}
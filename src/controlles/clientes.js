const getClients = (req, res) => {
    const data = [
        {
            "name": "Mauricio",
            "age": 18,
            "country": "Perú"
        },
        {
            "name": "Mario",
            "age": 25,
            "country": "Italia"
        },
        {
            "name": "Messi",
            "age": 34,
            "country": "Argentina"
        },
    ]
    res.json({"data": data})
}

module.exports = {getClients}
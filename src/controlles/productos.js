const getProducts = (req, res) => {
    const data = [
        {
            "name": "Gaseosa Inka Cola 3L",
            "price": 13.5,
            "stock": 56
        },
        {
            "name": "Galleta Mabel",
            "price": 3.0,
            "stock": 23
        },
        {
            "name": "Cheese Tris",
            "price": 1.0,
            "stock": 85
        },
    ]

    res.json({"data":data})
}

module.exports = {getProducts}
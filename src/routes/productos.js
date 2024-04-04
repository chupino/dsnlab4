const {Router} = require('express');
const router = Router();
const {getProducts} = require('../controlles/productos');

router.get('/', getProducts);

module.exports = router;
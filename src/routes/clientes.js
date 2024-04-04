const {Router} = require('express');
const router = Router();
const {getClients} = require('../controlles/clientes');

router.get('/', getClients);

module.exports = router;
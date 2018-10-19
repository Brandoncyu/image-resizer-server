const router = require('express').Router()
const ctrl = require('../controllers/photos')

router.post('*', ctrl.getPhoto)

module.exports = router

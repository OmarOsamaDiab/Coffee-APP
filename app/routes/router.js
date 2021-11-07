require('../database/db.connection')
const router = require('express').Router()

const podController = require('../controllers/pod.controller')
const machineController = require('../controllers/machine.controller')


router.get('/pods', podController)
router.get('/machines', machineController)

module.exports = router
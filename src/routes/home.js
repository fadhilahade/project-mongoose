const router = require('express').Router()
const greeting = require('../controllers/home')

router.get('/', greeting.greetings)

module.exports = router
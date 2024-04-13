const express = require('express')
const { getUser, addUser, updateUser, deleteUser } = require('../Controllers/UserController')
const router = express.Router()

router.post('/', addUser)
router.get('/', getUser)
router.put('/', updateUser)
router.delete('/', deleteUser)


module.exports = router
const express = require('express')
const { addProduct, getProduct, updateProduct, deleteProduct } = require('../Controllers/ProductController')
const router = express.Router()

router.post('/', addProduct)
router.get('/', getProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)


module.exports = router
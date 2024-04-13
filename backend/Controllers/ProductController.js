const addProduct = (req, res) => {
    console.log('Product Added!');
    res.send('Product has been Added')
}

const getProduct = (req, res) => {
    console.log('Product read!');
    res.send('Product read')
}

const updateProduct = (req, res) => {
    console.log('Product updated successfully!');
    res.send('Product updated successfully!')
}

const deleteProduct = (req, res) => {
    console.log('Product Deleted!');
    res.send('Product Deleted successfully! ')
}

module.exports = {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}
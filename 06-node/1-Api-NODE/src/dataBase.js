
const sequence = {
    _id: 1,
    get id(){return this._id++}
}

const products = {}

const saveProducts = product => {
    if (!product.id) product.id = sequence.id
    products[product.id] = product
    return product
}

const getProduct = id => products[id] || {}

const getAllProducts = () => Object.values(products)

const deleteProduct = id => {
    const productDeleted = products[id]
    delete products[id]
    return productDeleted
}

module.exports = {saveProducts, getProduct , getAllProducts, deleteProduct}


const products = require('../data/products')

// class Product {
//     contructor (name, description) {
//         this.name = name;
//         this.description = description;
//     }
// }

const list = (req, res) => {
  res.json(products)
}

const show = (req, res) => {
  const product = products.find(function(item){
    return item._id == req.params.id
    })
    res.json(product)
}

const create = (req, res) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description
    }
    console.log(newProduct.name);
    products.push(newProduct)
}

module.exports = { 
  list, show, create
}
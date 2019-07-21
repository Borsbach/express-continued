const vehicles = require('../data/vehicles')

const list = (reg, res) => {
  res.json(vehicles)
}

const show = (req, res) => {
  const vehicle = vehicles.find(function(item){
    return item._id == req.params.id
  })
  res.json(vehicle)
}

const create = (req, res) => {
  const newVehicle = {
    _id: vehicles.length +1,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year
  }
  vehicles.push(newVehicle)
}

module.exports = {
  list, show, create
}
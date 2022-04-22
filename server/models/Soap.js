const mongoose = require('mongoose');

const { Schema,model } = require('mongoose');

const SoapSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
        },
    description: {
        type: String
      },
      image: {
        type: String
      },
    price: {
        type: Number,
        required: true,
        min: .01
        },
    quantitiy: {
        type: Number,
        min: 0, 
        default: 0
        },
    ingredients: []
})

const Soap = mongoose.model('Soap', SoapSchema);

module.exports = Soap;
const { Schema,model } = require('mongoose');

const SoapSchema = new Schema({
    soapName: {
        type: String
    },
    soapPrice: {
        type: Number
    },
    ingredients: []
})
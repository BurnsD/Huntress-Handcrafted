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

const Soap = mongoose.model('Soap', SoapSchema);

module.exports = Soap;
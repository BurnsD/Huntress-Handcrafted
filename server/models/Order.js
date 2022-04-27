const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    purchased: [
        {
            type: Schema.Types.ObjectId,
            ref:'Soap'
        }
    ]
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
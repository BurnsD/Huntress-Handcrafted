const { Schema,model } = require('mongoose');

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
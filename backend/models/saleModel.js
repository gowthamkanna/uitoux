const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    customerId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Invalid Customer']
    },
    productId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Invalid Customer']
    },
    salePrice : {
        type: Number,
        required: true
    },
    shippingAddress : {
        type: String,
        required: [true, "Shipping Address is required"]
    }
},
{
    timestamps: true
})


let model =  mongoose.model('Sale', saleSchema);


module.exports = model;
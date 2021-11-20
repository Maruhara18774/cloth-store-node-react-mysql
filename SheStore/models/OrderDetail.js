const mongoose = require('mongoose')

const orderDetailSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        trim: true
    },
    product_id: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    total: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('OrderDetails', orderDetailSchema)
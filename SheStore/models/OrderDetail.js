const mongoose = require('mongoose')

const orderDetailSchema = new mongoose.Schema({
    detail_id:{
        type: Number,
        unique: true,
        trim: true,
        required: true
    },
    order_id: {
        type: Number,
        required: true,
        trim: true
    },
    product_id: {
        type: Number,
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
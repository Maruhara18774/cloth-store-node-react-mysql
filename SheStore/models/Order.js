const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    order_id:{
        type: Number,
        unique: true,
        trim: true,
        required: true
    },
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    createdDate: {
        type: Date,
        required: true,
        trim: true
    },
    status: {
        type: String,
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

module.exports = mongoose.model('Orders', orderSchema)
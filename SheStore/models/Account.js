const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    status: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Accounts', accountSchema)
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category_id:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    quantity:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Products', productSchema)
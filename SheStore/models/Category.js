const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    category_id:{
        type: Number,
        unique: true,
        trim: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Categories', categorySchema)
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food',
    },
}, {timestamps: true});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
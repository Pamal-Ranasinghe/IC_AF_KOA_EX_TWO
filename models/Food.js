const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }
});

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;
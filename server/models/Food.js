const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
    foodName: {
        type: String,
        required: true,
    },
    quantity:{
        type: String,
        required: false,
    },
    unit: {
        type: String,
        required: false,
    },
    calories: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'FoodCategory',
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    addedOn: {
        type: Date,
        default: Date.now,
    },
});

const Food = model('Food', foodSchema);
module.exports = Food;
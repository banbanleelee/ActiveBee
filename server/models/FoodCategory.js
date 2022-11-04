const { Schema, model } = require('mongoose');

const foodCategorySchema = new Schema({
    categoryName: {
        type: String,
        // required: true,
        trim: true
    },
    icon: {
        type: String,
    },
});

const FoodCategory = model('FoodCategory', foodCategorySchema);

module.exports = FoodCategory;

import { Schema } from "mongoose";

const foodSchema = new Schema({
    foodName: {
        type: String,
        required: true,
    },
    calories: {
        type: String,
        required: true,
    }
});

const Food = model('Food', foodSchema);
module.exports = Food;
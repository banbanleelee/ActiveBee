const { Schema, model } = require('mongoose');

const foodDatabaseSchema = new Schema({
    foodClass: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: false,
    },
    foodNutrients: [
        {
            type: {
                type: String,
            },
            id: {
                type: Number,
            },
            nutrient: {
                id: {
                    type: Number,
                },
                number: {
                    type: String,
                },
                name: {
                    type: String,
                },
                rank: {
                    type: Number,
                },
                unitName: {
                    type: String,
                },
            },
            amount: {
                type: Number,
            }
        }
    ],
    foodAttributes: [
        {
            id: {
                type: Number,
            },
            number: {
                type: String,
            },
            value: {
                type: String,
            },
            foodAttributeType: {
                id: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                description: {
                    type: String,
                },
            },
        },
    ],
    foodCode: {
        type: Number,
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    wweiaFoodCategory: {
        wweiaFoodCategoryCode: {
            type: Number
        },
        wweiaFoodCategoryDescription: {
            type: String,
        },
    },
    foodPortions: [
        {
            id: {
                type: Number,
            },
            measureUnit: {
                id: {
                    type: Number,
                },
                name: {
                    type: String,
                },
                abbreviation: {
                    type: String,
                },
            },
            modifier: {
                type: String,
            },
            gramWeight: {
                type: Number,
            },
            sequenceNumber: {
                type: Number,
            },
            portionDescription: {
                type: String,
            },
        },
    ],
    publicationDate: {
        type: String,
    },
    inputFoods: [
        {
            id: {
                type: Number,
            },
            unit: {
                type: String,
            },
            portionDescription: {
                type: String,
            },
            portionCode: {
                type: String,
            },
            foodDescription: {
                type: String,
            },
            sequenceNumber: {
                type: Number,
            },
            ingredientDescription: {
                type: String,
            },
            ingredientWeight: {
                type: Number,
            },
            amount: {
                type: Number,
            },
            ingredientCode: {
                type: Number,
            },
        },
    ],
    fdcId: {
        type: Number,
    },
    dataType: {
        type: String,
    },
});

const FoodDatabase = model('FoodDatabase', foodDatabaseSchema);

module.exports = FoodDatabase;
const db = require('../config/connection');
const { FoodDatabase } = require('../models');
const foodDatabaseSeeds = require('./FNDDS.json');

db.on('error', (err) => err);

db.once('open', async() => {
    console.log('connected');
    try {
        await FoodDatabase.deleteMany({});

        await FoodDatabase.insertMany(foodDatabaseSeeds);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('all done!');
    process.exit(0);
})
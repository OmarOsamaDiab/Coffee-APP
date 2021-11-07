const coffeeMachinesModel = require('../models/machine.model')
const coffeePodsModel = require('../models/pod.model')
const MACHINES = require('./data/machine')
const PODS = require('./data/pod')

const seedDatabase = async (model, items) => {
    try {
        const existingData = await model.list();

        if (existingData.length === 0) {
            items.map((item) => model.create(item));
        }
    } catch (error) {
        console.error("something went wrong")
    }
};

seedDatabase(coffeeMachinesModel, MACHINES);
seedDatabase(coffeePodsModel, PODS);

setTimeout(() => process.exit(), 5000);
const mongoose = require('../database/db.connection');

const { Schema } = mongoose;

const coffeeMachineSchema = new Schema({
    sku: {
        type: String,
        require: true,
        unique: true,
    },
    model_type: String,
    product_type: String,
    water_line_compatible: Boolean,
});

const CoffeeMachineModel = new mongoose.model(
    'Coffee_Machine',
    coffeeMachineSchema,
);

const createMachine = async coffeeMachineData => {
    const coffeeMachine = new CoffeeMachineModel(coffeeMachineData);
    await coffeeMachine.save();
};

const listMachines = async query => CoffeeMachineModel.find(query)
module.exports = {
    createMachine,
    listMachines
}
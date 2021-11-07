const mongoose = require('../database/db.connection');

const { Schema } = mongoose;

const coffeePodSchema = new Schema({
    sku: {
        type: String,
        require: true,
        unique: true,
    },
    coffee_flavor: String,
    product_type: String,
    pack_size: Number,
});

const CoffeePodModel = new mongoose.model('Coffee_Pod', coffeePodSchema);

const createPod = async coffeePodData => {
    const coffeePod = new CoffeePodModel(coffeePodData);
    await coffeePod.save();
};

const listPods = async query => CoffeePodModel.find(query)

module.exports = {
    createPod,
    listPods
}
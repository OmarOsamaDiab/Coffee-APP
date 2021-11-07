const { listMachines } = require('../models/machine.model');

const getMachines = async (req, res, next) => {
    try {
        const { query } = req;
        const coffeeMachines = await listMachines(query);
        res.json({ items: coffeeMachines });
    } catch (err) {
        res.status(500).json({
            error: "internal server error"
        })
    }
}

module.exports = getMachines

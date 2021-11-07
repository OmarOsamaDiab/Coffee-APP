const { listPods } = require('../models/pod.model');

const getPods = async (req, res, next) => {
    try {
        const { query } = req;
        const coffeePods = await listPods(query);
        res.json({ items: coffeePods });
    } catch (error) {
        res.status(500).json({
            error: "internal server error"
        })
    }
}

module.exports = getPods

const Portfolio = require('../models/portfolio');

exports.addPortfolio = async (req, res) => {
    const { name, user } = req.body;

    try {
        await Portfolio.addPortfolio(name, user);
        res.sendStatus(200);
    } catch (error) {
        console.log("addPortfolio() controller error:", error.message);
        res.sendStatus(400);
    }
}

exports.deletePortfolio = async (req, res) => {
    const { name, user } = req.body;

    try {
        await Portfolio.deletePortfolio(name, user);
        res.sendStatus(200);
    } catch (error) {
        console.log("deletePortfolio() controller error:", error.message);
        res.sendStatus(400);
    }
}
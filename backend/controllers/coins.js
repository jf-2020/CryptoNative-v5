const Coin = require('../models/coin');

exports.addCoinToPortfolio = async (req, res) => {
    // const { coinName, coinAmount, date, coinPrice } = req.body;
    let { coinName, coinAmount, coinPrice } = req.body;
    const user_id = parseInt(req.params.userId);
    coinAmount = parseFloat(coinAmount);
    coinPrice = parseFloat(coinPrice);

    // TESTING
    const portfolio_id = 1;
    const symbol = 'BTC';

    const coinInstance = new Coin(
        null, portfolio_id,
        user_id, coinName,
        symbol, coinAmount,
        coinPrice);
    console.log("coinInstance:", coinInstance);

    try {
        await coinInstance.saveCoin();
        res.sendStatus(200);
    } catch (error) {
        console.log("addCoinToPortfolio error:", error.message);
        return error.message;
    }
}
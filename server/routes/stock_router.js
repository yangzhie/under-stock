const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const User = require("../models/user.model");

const { authToken } = require("../middlewares/authToken");

// Add Stock
router.post("/:username/watchlist/:watchlistId/stock", authToken, async (req, res) => {
    const { username, watchlistId } = req.params;
    const { symbol, name } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: true, message: "User not found." });
        }

        const watchlist = user.watchlists.find((watchlist) => watchlist._id.toString() === watchlistId);
        if (!watchlist) {
            return res.status(404).json({ error: true, message: "Watchlist not found." });
        }

        watchlist.stocks.push({ symbol, name });
        await user.save();
        res.status(200).json({ error: false, message: "Stock added to watchlist successfully.", watchlist });
    } catch (error) {
        res.status(500).json({ error: true, message: "Error adding stock to watchlist.", error });
    }
});

// Delete Stock
router.delete('/:username/watchlist/:watchlistId/stock/:symbol', async (req, res) => {
  const { username, watchlistId, symbol } = req.params;

  try {
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ error: true, message: "User not found." });
    }


    const watchlist = user.watchlists.find((watchlist) => watchlist._id.toString() === watchlistId);
    if (!watchlist) {
        return res.status(404).json({ error: true, message: "Watchlist not found." });
    }

    watchlist.stocks = watchlist.stocks.filter(stock => stock.symbol !== symbol);
    await user.save();
    res.status(200).json({ error: false, message: "Stock removed.", watchlist });
  } catch (error) {
    res.status(500).json({ message: "Error removing stock.", error });
  }
});

module.exports = router;
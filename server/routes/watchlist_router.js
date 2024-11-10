const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const User = require("../models/user.model");

const { authToken } = require("../middlewares/authToken");

// Create Watchlist 
router.post("/:username/watchlist", authToken, async (req, res) => {
    const { username } = req.params;
    const { name } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: true, message: "User not found." });
        } else {
            user.watchlists.push({ name, stocks: [] });
            await user.save();
            res.status(201).json({ error: false, message: "Watchlist created successfully." });
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Error creating a watchlist.", error });
    }
});

// Get Watchlists
router.get("/:username/watchlist", authToken, async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: true, message: "User not found." });
        } else {
            res.json({ watchlists: user.watchlists });
        }
    } catch (error) {
        res.status(500).json({ error: true, message: "Error getting watchlists.", error });
    }
});

// Delete Watchlist
router.delete("/:username/watchlist/:watchlistId", authToken, async (req, res) => {
    const { username, watchlistId } = req.params;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: true, message: "User not found." });
        } else {
            user.watchlists = user.watchlists.filter((watchlist) => watchlist._id.toString() !== watchlistId);
            await user.save();
            res.status(200).json({ error: false, message: "Watchlist deleted successfully." });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error, message: "Error deleting watchlist." });
    }
});

module.exports = router;
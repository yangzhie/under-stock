require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

const User = require("./models/user.model");

const jwt = require("jsonwebtoken");
const { authToken } = require("./middlewares/authToken");

const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");
const e = require("express");
app.use(cors({
    origin: "http://localhost:3000",
}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json()); 

app.get("/", (req, res) => {
    res.json({ message: "Hello" });
});

// Register
app.post("/register", async (req, res) => {
    // Info from request body
    const { username, email, password, confirmPassword } = req.body;

    // Initial checks
    if (!username) {
        return res.status(400).json({ message: "Please enter a username." });
    } else if (!email) {
        return res.status(400).json({ message: "Please enter an email." });
    } else if (!password) {
        return res.status(400).json({ message: "Please enter a password." });
    } else if (!confirmPassword) {
        return res.status(400).json({ message: "Please confirm your password." });
    } else if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match." });
    }

    // Search for user in DB
    const isUser = await User.findOne({ email });

    // Check if user already exists
    if (isUser) {
        return res.status(400).json({ error: true, message: "Email already exists." });
    }

    // Create new user object
    const newUser = new User({ username, email, password });

    // Save user to DB
    await newUser.save();

    // Create access token for user
    const accessToken = jwt.sign({ newUser }, process.env.ACCESS_TOKEN, { expiresIn: "20m" });

    res.json({ error: false, newUser, accessToken, message: "User registered successfully." });
});

// Login
app.post("/login", async (req, res) => {
    // Info from HTTP body
    const { username, password } = req.body;

    // Initial checks
    if (!username) {
        return res.status(400).json({ message: "Please enter a username." });
    };

    if (!password) {
        return res.status(400).json({ message: "Please enter a password." });
    };

    // Search for user in DB, store in object 
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
        return res.status(400).json({ error: true, message: "User does not exist." });
    };

    // Success handling
    if (user.username === username && user.password === password) {
        // Create access token for user
        const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN, { expiresIn: "20m" });

        // Create refresh token for user
        const refreshToken = jwt.sign({ user }, process.env.REFRESH_TOKEN, { expiresIn: "10m" });

        // Store refresh token in DB or in-memory storage
        user.refreshToken = refreshToken;
        await user.save();

        res.json({ error: false, user, accessToken, refreshToken, message: "User logged in successfully." });
    } else {
        res.status(400).json({ error: true, message: { message: "Invalid email or password." } });
    }
});

// Get User
app.get("/get-user", authToken, async (req, res) => {
    // Get user object
    const { user } = req.user;

    // Get user from DB
    const userDB = await User.findOne({ _id: user._id });

    // Handle user not found
    if (!userDB) {
        return res.status(401).json({ error: true, message: "User not found." });
    };

    res.json({ user: userDB });
});

// Create Watchlist 
app.post("/:username/watchlist", authToken, async (req, res) => {
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

// Getting Watchlists
app.get("/:username/watchlist", authToken, async (req, res) => {
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
app.delete("/:username/watchlist/:watchlistId", authToken, async (req, res) => {
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

// Add Stock
app.post("/:username/watchlist/:watchlistId/stock", authToken, async (req, res) => {
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
app.delete('/:username/watchlist/:watchlistId/stock/:symbol', async (req, res) => {
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

// Listen on port
app.listen(port, () => {
    console.log(`Server is now listening on port: ${port}`);
});
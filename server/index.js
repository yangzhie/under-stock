require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

const User = require("./models/user.model");

const jwt = require("jsonwebtoken");

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
    if(isUser) {
        return res.status(400).json({ error: true, message: "Email already exists." });
    }

    // Create new user object
    const newUser = new User({ username, email, password });

    // Save user to DB
    await newUser.save();

    // Create access token for user
    const accessToken = jwt.sign({ newUser }, process.env.ACCESS_TOKEN, { expiresIn: "20m" });

    res.json({ error: false, newUser, accessToken, message: "User registered successfully." });
})

app.listen(port, () => {
    console.log(`Server is now listening on port: ${port}`);
});
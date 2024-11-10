require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");
app.use(cors({
    origin: "http://localhost:3000",
}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json()); 

// Routers
const authRouter = require("./routes/auth_router");
const watchlistRouter = require("./routes/watchlist_router");
const stockRouter = require("./routes/stock_router");

app.use(authRouter);
app.use(watchlistRouter);
app.use(stockRouter);

// Listen on port
app.listen(port, () => {
    console.log(`Server is now listening on port: ${port}`);
});
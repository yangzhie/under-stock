const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    watchlists: [watchlistSchema],
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

const watchlistSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    stocks: [{symbol: String, name: String}],
});

module.exports = mongoose.model("User", userSchema);
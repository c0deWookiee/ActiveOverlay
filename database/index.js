const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/InstaviewsProblems");
const db = mongoose.connection;

db.on("error", () => {
    console.log("Failed to connect to instaviews database!");
});
db.once("open", () => {
    console.log("Successfully connected to instaviews component database!");
});

module.exports = db;
// Add Express
const express = require("express");
// Initialize Express
const app = express();

// Create GET request
app.get("/api", (req, res) => {
    res.send("Express on Vercel");
});

module.exports = app;
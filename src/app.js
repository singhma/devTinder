const express = require("express");

// New application of express - creates a new express JS Application
const app = express();

// Request Handler
app.use("/", (req, res) => {
    res.send("Hello from dashboard!");
});


app.use("/hello", (req, res) => {
    res.send("hello hello hello");
});

app.use("/test", (req, res) => {
    res.send("Hello from the Server");
});

app.listen(3000, () => {
    console.log("Server successfully running on port 3000");
});
const express = require("express");

// New application of express - creates a new express JS Application
const app = express();

// Request Handler

// app.use("/hello", (req, res) => {
//     res.send("hello hello hello");
// });


//This will only handle get call to /user
app.get("/user",(req,rsp)=>{
    rsp.send({firstName:"test", lastname:"user"});
})

app.get("/params",(req,rsp)=>{
    console.log(req.query);
    rsp.send(req.query);
})

app.get("/params/:id",(req,rsp)=>{
    console.log(req.params);
    rsp.send(req.params);
})
app.post("/user",(req,rsp)=>{
    rsp.send("post  call");
})

app.delete("/user",(req,rsp)=>{
    rsp.send("post  call");
})
// if you code using `aap.use` it will match all the HTTP method API ca;;s with /test, /test/*
app.use("/test", (req, res) => {
    res.send("Hello from the Server");
});

// app.use("/", (req, res) => {
//     res.send("Hello from dashboard!!");
// });

app.listen(3000, () => {
    console.log("Server successfully running on port 3000");
});
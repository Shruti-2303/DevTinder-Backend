const express = require("express");
const app = express();

//for test route
app.use("/test",(req,res) => {
    res.send("Hello testing from our first server");
})
//for hello route
app.use("/hello",(req,res) => {
    res.send("Hello Hello Hello from our first server");
})
//request handler
app.use("/",(req,res) => {
    res.send("Namaste from our first server");
})
//listen to port
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
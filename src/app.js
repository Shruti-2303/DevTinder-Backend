const express = require("express");
const app = express();

//request handler
app.use((req,res) => {
    res.send("Hello from our first server");
})

//listen to port
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
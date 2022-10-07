const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }))


app.listen(port || 3000, function(req, res) {
    console.log("listening on port "+port);
})

app.get("/user", function(req, res) {
    res.send("GOOhe")
})

app.post("/:id", function(req, res) {
    console.log("hhhh "+req.params)
    res.json({rec:req.params})
})
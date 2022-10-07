const express = require("express");
const app = express();


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }))

const port = 3000;

app.listen(port, function(req, res) {
    console.log("listening on port "+port);
})

app.get("/user", function(req, res) {
    res.send("GOOhe")
})

app.post("/:id", function(req, res) {
    console.log("hhhh "+req.params)
    res.json({rec:req.params})
})
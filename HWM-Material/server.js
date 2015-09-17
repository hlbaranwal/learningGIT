var express = require('express');
var app = express();
app.use(express.static('./'));
app.use('/partials/panel', express.static(__dirname + './view'));
app.use('/partials', express.static(__dirname + './view'));
app.use('/css', express.static(__dirname + './css'));
app.use('/js', express.static(__dirname + './js'));
console.log("running at 3000");
app.get("/", function (req, res) {

    res.sendfile("index.html");
});

app.listen(3000);

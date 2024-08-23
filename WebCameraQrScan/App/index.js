var express = require("express");
var app = express();

var publicDir = "static";
var nodeModulesDir = "node_modules";
var port = process.env.SERVER_PORT || 8000;

app.listen(port);

// routes
app.use(express.static(publicDir));
app.use("/node_modules", express.static(nodeModulesDir));

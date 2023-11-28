const express = require("express");
const geoJson = require("./custom.geo.json");

const app = express();

app.get("/", (req, res) => {
  res.send(geoJson);
});

app.listen(3000);

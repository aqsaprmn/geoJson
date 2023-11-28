const fs = require("fs");

const country = [];

const geoJson = fs.readFileSync("./JSON/custom.geo.json", "utf-8");

const data = JSON.parse(geoJson);

data.features.forEach((item) => {
  country.push(item.properties.name);
});

const sortData = country.sort();
const trCountry = require("./JSON/trCountry.json");

const throwData = {
  sortData,
};

const tradeMapCount = {
  trCountry,
};

try {
  fs.writeFileSync("country.json", JSON.stringify(throwData));
  console.log(`Success import country totally: ${country.length}`);
  fs.writeFileSync("trCountry.json", JSON.stringify(tradeMapCount));
  console.log(`Success import trademap country totally: ${trCountry.length}`);
} catch (err) {
  console.log(err);
}

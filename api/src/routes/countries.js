const { urlencoded } = require("body-parser");

const countries = (req, res) => {
  if (req.url.includes("?")) return res.send("Ruta con query");

  console.log(req.url);
  res.send("Ruta de GET countries");
};

const countriesId = (req, res) => {
  res.send(`Ruta que recibe id: ${req.params.idCountry}`);
};

module.exports = { countries, countriesId };

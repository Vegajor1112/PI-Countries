const { urlencoded } = require("body-parser");
const axios = require("axios");
const { Router } = require("express");
const { Country } = require("../db");
const { capitalize } = require("./auxfs");

const countriesRouter = Router();

countriesRouter.get("", async (req, res) => {
  let countriesData;
  const { name } = req.query;

  if (name) {
    countriesData = await Country.findAll({
      where: { nombre: capitalize(req.query.name) },
    });
    if (countriesData.length !== 0) res.send(countriesData[0]);
    else res.send("Country not found");
    return;
  }

  console.log("Buscamos primero en la base de datos");
  try {
    countriesData = await Country.findAll({ raw: true });
  } catch (error) {
    console.log(error);
  }

  if (countriesData.length === 0) {
    console.log("Estoy buscando en la API porque la base de datos está vacía");
    countriesData = await axios("https://restcountries.com/v3.1/all");
    countriesData = countriesData.data;

    countriesData = countriesData.map((country) => {
      let capital;

      if (!country.capital) capital = "No posee";
      else capital = country.capital[0];

      return {
        id: country.cca3,
        nombre: country.name.common,
        bandera: country.flags.png,
        continente: country.region,
        capital: capital,
        subregion: country.subregion,
        area: country.area,
        poblacion: country.population,
      };
    });
    await Country.bulkCreate(countriesData);
  }

  res.send(countriesData);
});

module.exports = countriesRouter;
//module.exports = { countries, countriesId, queryCountry };

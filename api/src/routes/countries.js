const { urlencoded } = require("body-parser");
const axios = require("axios");
const { Router } = require("express");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const countriesRouter = Router();

countriesRouter.get("", async (req, res) => {
  let countriesData;
  const { name } = req.query;

  if (name) {
    countriesData = await Country.findAll({
      where: { nombre: { [Op.iLike]: `%${req.query.name}%` } },
    });

    if (countriesData.length !== 0) res.send(countriesData);
    else res.send({ notFound: "Country not found" });
    return;
  }

  try {
    countriesData = await Country.findAll({ raw: true });
  } catch (error) {
    console.log(error);
  }

  if (countriesData.length === 0) {
    countriesData = await axios("https://restcountries.com/v3.1/all");
    countriesData = countriesData.data;

    countriesData = countriesData.map((country) => {
      let capital;
      if (!country.capital) capital = "No capital";
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

countriesRouter.get("/:countryId", async (req, res) => {
  let countriesData = await Country.findAll({
    where: { id: req.params.countryId.toUpperCase() },
    include: Activity,
  });
  res.send(countriesData[0]);
});

module.exports = countriesRouter;

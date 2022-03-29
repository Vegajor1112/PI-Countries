const { urlencoded } = require("body-parser");
const axios = require("axios");
const { Router } = require("express");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const filterAndOrder = require("../utils/filterAndOrder");

const countriesRouter = Router();

countriesRouter.get("", async (req, res) => {
  const order = JSON.parse(req.query.order);
  const filter = JSON.parse(req.query.filter);

  let countriesData;
  const { name } = req.query;

  if (name) {
    if (filter.activity) {
      countriesData = await Country.findAll({
        include: [
          {
            model: Activity,
            where: { nombre: { [Op.or]: [filter.activity] } },
          },
        ],
        where: { nombre: { [Op.iLike]: `%${req.query.name}%` } },
      });
    } else {
      countriesData = await Country.findAll({
        include: [{ model: Activity }],
        where: { nombre: { [Op.iLike]: `%${req.query.name}%` } },
      });
    }

    if (countriesData.length !== 0)
      res.send(filterAndOrder(countriesData, order, filter));
    else res.send([{ notFound: "Country not found" }]);
    return;
  }

  if (filter.activity) {
    countriesData = await Country.findAll({
      include: [
        {
          model: Activity,
          where: { nombre: { [Op.or]: [filter.activity] } },
        },
      ],
    });
  } else {
    countriesData = await Country.findAll({
      include: [{ model: Activity }],
    });
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

  res.send(filterAndOrder(countriesData, order, filter));
});

countriesRouter.get("/formData", async (req, res) => {
  let countriesData;
  try {
    countriesData = await Country.findAll({
      order: [["nombre", "ASC"]],
      raw: true,
      attributes: ["id", "nombre"],
    });
  } catch (error) {
    console.log(error);
  }
  res.status(200).send(countriesData);
});

countriesRouter.get("/:countryId", async (req, res) => {
  let countriesData = await Country.findAll({
    where: { id: req.params.countryId.toUpperCase() },
    include: Activity,
  });
  res.send(countriesData[0]);
});

module.exports = countriesRouter;

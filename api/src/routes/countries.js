const { Router } = require("express");
const { Country, Activity } = require("../db");

const {
  defineProcess,
  checkDatabase,
  fetchData,
  buildStatement,
} = require("../utils");

const countriesRouter = Router();

countriesRouter.get("", async (req, res) => {
  const { searching, filtering, ordering } = defineProcess(req);

  !(await checkDatabase()) && (await fetchData());

  const statement = buildStatement(searching, filtering, ordering);

  let response = await Country.findAll(statement);

  response = response.length === 0 ? [{ notFound: "Not found" }] : response;
  const status = response[0].hasOwnProperty("notFound") ? 204 : 200;

  res.status(status).send(response);
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

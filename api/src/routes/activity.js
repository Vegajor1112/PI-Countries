const { Activity, Country } = require("../db");
const { Router } = require("express");

const activityRouter = Router();

activityRouter.post("", async (req, res) => {
  const { id, nombre, dificultad, duracion, temporada, idCountries } = req.body;
  try {
    const activity = await Activity.create({
      id,
      nombre,
      dificultad,
      duracion,
      temporada,
    });

    activity.addCountries(idCountries);
    res.send(activity);
  } catch (error) {
    console.log(error);
  }
});

activityRouter.get("", async (req, res) => {
  const activities = await Activity.findAll({ raw: true });

  res.status(200).send(activities);
});

module.exports = activityRouter;

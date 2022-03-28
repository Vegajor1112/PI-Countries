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
  const response = activities.map((activity) => {
    return { nombre: activity.nombre, id: activity.id };
  });
  res.status(200).send(response);
});

module.exports = activityRouter;

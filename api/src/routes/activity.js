const { Activity, Country } = require("../db");
const { Router } = require("express");

const activityRouter = Router();

activityRouter.post("", async (req, res) => {
  const { id, nombre, dificultad, duracion, temporada, idCountries } = req.body;
  console.log("activity");
  const activity = await Activity.create({
    id,
    nombre,
    dificultad,
    duracion,
    temporada,
  });

  activity.addCountries(idCountries);
  res.send(activity);
});

module.exports = activityRouter;

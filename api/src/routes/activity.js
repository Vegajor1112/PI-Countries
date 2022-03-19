const { Activity } = require("../db");

const activity = async (req, res) => {
  const { id, nombre, dificultad, duracion, temporada } = req.body;
  console.log("activity");
  const activity = await Activity.create({
    id,
    nombre,
    dificultad,
    duracion,
    temporada,
  });
  res.send(activity);
};

module.exports = activity;

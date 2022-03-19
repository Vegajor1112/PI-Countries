const { Router } = require("express");
const { countries, countriesId } = require("./countries");
const activity = require("./activity");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/activity");
router.get("/countries", countries);
router.get("/countries/:idCountry", countriesId);
router.post("/activity", activity);

module.exports = router;

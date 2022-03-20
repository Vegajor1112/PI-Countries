const { Router } = require("express");
//const { countries, countriesId, queryCountry } = require("./countries");
const countriesRouter = require("./countries");
const activity = require("./activity");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countriesRouter);
/*
router.get("/countries/?name", queryCountry);
router.get("/countries", countries);
router.post("/activity", activity);
*/
module.exports = router;

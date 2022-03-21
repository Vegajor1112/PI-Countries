const { Router } = require("express");
const countriesRouter = require("./countries");
const activityRouter = require("./activity");

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activity", activityRouter);

module.exports = router;

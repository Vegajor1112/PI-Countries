const { Country } = require("../db");

const checkDatabase = async () => {
  try {
    const dataCheck = await Country.findAll({ raw: true });
    return !!dataCheck.length;
  } catch (error) {
    console.log("Error checking database ", error);
  }
};

module.exports = checkDatabase;

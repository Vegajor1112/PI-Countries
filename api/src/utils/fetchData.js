const { Country } = require("../db");
const axios = require("axios");

const fetchData = async () => {
  try {
    const fetchedData = await axios("https://restcountries.com/v3.1/all");

    const dataToDb = fetchedData.data.map((country) => {
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
    await Country.bulkCreate(dataToDb);
  } catch (error) {
    console.log("Error fetching data a creating regs in database ", error);
  }
};

module.exports = fetchData;

const { conn } = require("../../src/db");
const { Country } = require("../../src/db");
const { expect } = require("chai");

const country = {
  id: "ARG",
  nombre: "Argentina",
  bandera: "/image.png",
  continente: "Americas",
  capital: "Buenos Aires",
  subregion: "South America",
  area: "456123",
  poblacion: 123456,
};

describe("Country model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  describe("Prueba de base de datos", () => {
    beforeEach(async () => {
      await Country.sync({ force: true });
    });

    it("Se debe crear correctamente el registro", async () => {
      const nuevo = await Country.create(country);
    });

    it("Debe buscar los registros en la base de datos", async () => {
      const busqueda = await Country.findAll();
    });
  });
});

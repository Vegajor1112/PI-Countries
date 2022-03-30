/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Activity, conn } = require("../../src/db.js");

const agent = session(app);
const activity = {
  nombre: "Tomar Mate",
  duracion: 1,
  dificultad: 4,
  temporada: "Summer",
};

describe("Activity routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Error:", err);
    })
  );
  beforeEach(() =>
    Activity.sync({ force: true }).then(() => Activity.create(activity))
  );
  describe("GET /activity", () => {
    it("La ruta GET /activity funciona correctamente y responde con status 200", () =>
      agent.get("/activity").expect(200));
  });
  describe("POST /activity", () => {
    it("La ruta POST /activity funciona correctamente y responde con status 200", () =>
      agent.post("/activity", activity).expect(200));
  });
});

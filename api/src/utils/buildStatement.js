const { Op } = require("sequelize");
const { Activity } = require("../db");

const buildStatement = (searching, filtering, ordering) => {
  let statement = {
    attributes: ["nombre", "continente", "bandera", "poblacion", "id"],
  };

  if (searching)
    statement.where = { nombre: { [Op.iLike]: `%${searching.value}%` } };

  if (ordering) {
    let param = ordering.value === "ascend" ? "ASC" : "DESC";
    statement.order = [["nombre", param]];
  }

  if (filtering) {
    const param = filtering.value;
    console.log(param);
    statement.include = [
      {
        model: Activity,
        where: { nombre: { [Op.or]: [param] } },
      },
    ];
  }

  return statement;
};

module.exports = buildStatement;

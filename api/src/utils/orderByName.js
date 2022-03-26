const orderByName = (countries, order) => {
  const { orderBy, orderType } = order;

  if (orderBy !== "name") return countries;
  if (countries.length === 1) return countries;

  let sorted = countries.sort((country1, country2) => {
    if (country1.nombre < country2.nombre) {
      return -1;
    }
    if (country1.nombre > country2.nombre) {
      return 1;
    }
    return 0;
  });
  if (orderType === "descend") return sorted.reverse();

  sorted = sorted.map((country) => {
    return {
      id: country.id,
      nombre: country.nombre,
      bandera: country.bandera,
      continente: country.continente,
      poblacion: country.poblacion,
    };
  });

  return sorted;
};

module.exports = orderByName;

/*users.sort(function (a, b) {
  if (a.firstname < b.firstname) {
    return -1;
  }
  if (a.firstname > b.firstname) {
    return 1;
  }
  return 0;
});*/
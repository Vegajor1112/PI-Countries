const orderByPopulation = (countries, type) => {
  if (countries.hasOwnProperty("notFound")) return countries;

  return countries.sort((pais1, pais2) => {
    if (type === "ascend") {
      return pais1.poblacion - pais2.poblacion;
    } else {
      return pais2.poblacion - pais1.poblacion;
    }
  });
};

export default orderByPopulation;

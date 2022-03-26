const orderByPopulation = (countries, type) => {
  if (countries.hasOwnProperty("notFound")) return countries;
  return countries.sort((pais1, pais2) => {
    if (type === "ascend") {
      console.log("Ascendente");
      return pais1.poblacion - pais2.poblacion;
    } else {
      console.log("Descendente");
      return pais2.poblacion - pais1.poblacion;
    }
  });
};

export default orderByPopulation;

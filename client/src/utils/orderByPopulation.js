const orderByPopulation = (countries, type) => {
  return countries.sort((pais1, pais2) => {
    if (type === "ascending") {
      console.log("Ascendente");
      return pais1.poblacion - pais2.poblacion;
    } else {
      console.log("Descendente");
      return pais2.poblacion - pais1.poblacion;
    }
  });
};

export default orderByPopulation;

const orderByPopulation = (countries) => {
  return countries.sort((pais1, pais2) => {
    return pais1.poblacion - pais2.poblacion;
  });
};

export default orderByPopulation;

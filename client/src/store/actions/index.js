import axios from "axios";

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRY = "GET_COUNTRY";
const SEARCH_COUNTRY = "SEARCH_COUNTRY";

const getCountries = () => {
  return async function (dispatch) {
    const data = await axios("http://localhost:3001/countries");
    dispatch({ type: GET_COUNTRIES, payload: data.data });
  };
};

const getCountry = (id) => {
  return async function (dispatch) {
    const data = await axios(`http://localhost:3001/countries/${id}`);
    dispatch({ type: GET_COUNTRY, payload: data.data });
  };
};

export { GET_COUNTRY, GET_COUNTRIES, SEARCH_COUNTRY, getCountries, getCountry };

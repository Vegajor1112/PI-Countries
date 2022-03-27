import axios from "axios";

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRY = "GET_COUNTRY";
const GET_ACTIVITIES = "GET_ACTIVITIES";
const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
const SET_ORDER = "SET_ORDER";
const SET_SEARCH_INPUT = "SET_SEARCH_INPUT";
const SET_FILTER = "SET_FILTER";

const getCountries = (order, filter) => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/countries", {
      params: { order, filter },
    });
    dispatch({
      type: GET_COUNTRIES,
      payload: { data: data.data, order: order, filter: filter },
    });
  };
};

const searchCountries = (search, order, filter) => {
  return async function (dispatch) {
    const data = await axios.get(
      `http://localhost:3001/countries?name=${search}`,
      { params: { order, filter } }
    );
    dispatch({
      type: SEARCH_COUNTRIES,
      payload: { data: data.data, order: order, filter: filter },
    });
  };
};

const getActivities = () => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/activity");
    dispatch({ type: GET_ACTIVITIES, payload: data.data });
  };
};

const getCountry = (id) => {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/countries/${id}`);
    dispatch({ type: GET_COUNTRY, payload: data.data });
  };
};

const setOrder = (order) => {
  return { type: SET_ORDER, payload: order };
};

const setSearchInput = (input) => {
  return { type: SET_SEARCH_INPUT, payload: input };
};

const setFilter = (filter) => {
  return { type: SET_FILTER, payload: filter };
};

export {
  GET_COUNTRY,
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  SET_ORDER,
  SET_SEARCH_INPUT,
  SET_FILTER,
  GET_ACTIVITIES,
  getCountries,
  getCountry,
  getActivities,
  searchCountries,
  setOrder,
  setSearchInput,
  setFilter,
};

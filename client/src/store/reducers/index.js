import { orderByPopulation } from "../../utils";

import {
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  SET_FILTER,
  SET_ORDER,
  SET_SEARCH_INPUT,
} from "../actions";

const initialState = {
  countries: [],
  country: {},
  activities: [],
  order: {
    orderBy: "name",
    orderType: "ascend",
  },
  filter: {
    continent: "",
    activity: "",
  },
  searchInput: "",
};

const rootReducer = (state = initialState, action) => {
  let data;
  let orderBy;
  let orderType;
  let filterContinent;
  let filterActivity;

  switch (action.type) {
    //************************************ */   GET_COUNTRIES
    case GET_COUNTRIES:
      data = action.payload.data;
      orderBy = action.payload.order.orderBy;
      orderType = action.payload.order.orderType;
      filterContinent = action.payload.filter.continent;
      filterActivity = action.payload.filter.activity;

      if (orderBy === "population") {
        data = orderByPopulation(data, orderType);
      }
      if (filterContinent && !data[0].hasOwnProperty("notFound")) {
        data = data.filter((country) => country.continente === filterContinent);
      }
      if (data.length === 0) data = { notFound: "Country not found" };
      return {
        ...state,
        countries: data,
      };

    //*************************************** */
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SEARCH_COUNTRIES:
      data = action.payload.data;
      orderBy = action.payload.order.orderBy;
      orderType = action.payload.order.orderType;
      filterContinent = action.payload.filter.continent;
      filterActivity = action.payload.filter.activity;
      if (orderBy === "population") {
        data = orderByPopulation(data, orderType);
      }

      if (filterContinent && !data[0].hasOwnProperty("notFound")) {
        data = data.filter((country) => country.continente === filterContinent);
      }
      if (data.length === 0) data = { notFound: "Country not found" };

      return {
        ...state,
        countries: data,
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;

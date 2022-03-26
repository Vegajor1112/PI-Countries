import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  SET_ORDER,
  SET_SEARCH_INPUT,
} from "../actions";

import { orderByPopulation } from "../../utils";

const initialState = {
  countries: [],
  country: {},
  order: {
    orderBy: "name",
    orderType: "ascend",
  },
  filter: {
    filterByContinent: "",
    filterByActivity: "",
  },
  searchInput: "",
};

const rootReducer = (state = initialState, action) => {
  let data;
  let orderBy;
  let orderType;

  switch (action.type) {
    //************************************ */   GET_COUNTRIES
    case GET_COUNTRIES:
      data = action.payload.data;
      orderBy = action.payload.order.orderBy;
      orderType = action.payload.order.orderType;
      if (orderBy === "population") {
        data = orderByPopulation(data, orderType);
      }
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
      if (orderBy === "population") {
        data = orderByPopulation(data, orderType);
      }
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

    default:
      return state;
  }
};

export default rootReducer;

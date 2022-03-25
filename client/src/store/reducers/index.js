import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  SET_ORDER,
  SET_SEARCH_INPUT,
} from "../actions";

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
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
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

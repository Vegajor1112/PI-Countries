import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES } from "../actions";

const initialState = {
  countries: [],
  country: {},
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
    default:
      return state;
  }
};

export default rootReducer;

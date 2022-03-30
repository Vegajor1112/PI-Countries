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

export default initialState;

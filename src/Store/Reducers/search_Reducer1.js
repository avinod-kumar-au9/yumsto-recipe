import { SearchAction } from "../Actions/searchAction";

const searchStore = {
  searchDataS: "",
};

const SearchReducer = (state, action) => {
  state = state || searchStore;

  switch (action.type) {
    case SearchAction.homesearchApi:
      return {
        ...state,
        searchDataS: action.payload,
      };

    default:
      return state;
  }
};

export default SearchReducer;

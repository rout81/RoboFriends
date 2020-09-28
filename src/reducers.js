import {
  CHANGE_SEARCH_FIELD,
  CHANGE_ROBOTS_PENDING,
  CHANGE_ROBOTS_SUCCESS,
  CHANGE_ROBOTS_ERROR,
} from "./constants.js";

const initialStateSearch = {
  searchField: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: "",
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case CHANGE_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case CHANGE_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case CHANGE_ROBOTS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

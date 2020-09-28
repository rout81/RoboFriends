import {
  CHANGE_SEARCH_FIELD,
  CHANGE_ROBOTS_PENDING,
  CHANGE_ROBOTS_SUCCESS,
  CHANGE_ROBOTS_ERROR,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: CHANGE_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dispatch({ type: CHANGE_ROBOTS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: CHANGE_ROBOTS_ERROR, payload: error }));
};

import * as actionTypes from "../actionTypes/actionTypes";
import axios from "../../axios";

/**
 * Action to add a new new user
 * @param  userData All the user data provided during sign up
 * @return
 */
export const addNewUser = userData => {
  return dispatch => {
    dispatch(newUserSignUpStart());
    axios
      .post("/users.json", userData)
      .then(response => {
        dispatch(newUserSignUpSuccess(userData));
      })
      .catch(error => {
        dispatch(newUserSignUpFailed(error));
      });
  };
};

/**
 * Action to  fetch user data
 * @return
 */
export const fetchUser = () => {
  return dispatch => {
    dispatch(fetchUserStart());
    axios
      .get("/users.json")
      .then(res => {
        const fetchedUser = [];
        for (let key in res.data) {
          fetchedUser.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchUserSuccess(fetchedUser[0]));
      })
      .catch(err => {
        dispatch(fetchUserFailed(err));
      });
  };
};

export const newUserSignUpStart = () => {
  return {
    type: actionTypes.NEW_USER_SIGN_UP_START
  };
};

export const newUserSignUpSuccess = userData => {
  return {
    type: actionTypes.NEW_USER_SIGN_UP_SUCCESS,
    userData: userData
  };
};

export const newUserSignUpFailed = error => {
  return {
    type: actionTypes.NEW_USER_SIGN_UP_FAILED,
    error: error
  };
};

export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USER_START
  };
};

export const fetchUserSuccess = user => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    user: user
  };
};

export const fetchUserFailed = error => {
  return {
    type: actionTypes.FETCH_USER_FAILED,
    error: error
  };
};

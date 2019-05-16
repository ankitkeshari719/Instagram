import * as actionTypes from "../actionTypes/actionTypes";
import axios from "../../axios";

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

/**
 * Action to add a new new user
 * @param  userData All the user data
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

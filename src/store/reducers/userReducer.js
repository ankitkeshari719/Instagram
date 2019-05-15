import * as actionTypes from "../actionTypes/actionTypes";
import { updateObject } from "../../shared";

const initialState = {
  user: null,
  loading: false,
  error: false
};

const newUserSignUpStart = (state, action) => {
  return updateObject(state, { loading: true, error: false });
};

const newUserSignUpSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: false,
    user: action.userData
  });
};

const newUserSignUpFailed = (state, action) => {
  return updateObject(state, { loading: false, error: true });
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_USER_SIGN_UP_START:
      return newUserSignUpStart(state, action);
    case actionTypes.NEW_USER_SIGN_UP_SUCCESS:
      return newUserSignUpSuccess(state, action);
    case actionTypes.NEW_USER_SIGN_UP_FAILED:
      return newUserSignUpFailed(state, action);
    default:
      return state;
  }
};

export default userReducer;

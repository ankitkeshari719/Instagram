import * as actionTypes from "../actionTypes/actionTypes";
import { updateObject } from "../../shared";

const initialState = {
  user: null,
  loading: false,
  error: false,
  fetchUserLoading: false,
  fetchUserPostsLoading: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_USER_SIGN_UP_START:
      return newUserSignUpStart(state, action);
    case actionTypes.NEW_USER_SIGN_UP_SUCCESS:
      return newUserSignUpSuccess(state, action);
    case actionTypes.NEW_USER_SIGN_UP_FAILED:
      return newUserSignUpFailed(state, action);
    case actionTypes.FETCH_USER_DATA_START:
      return fetchUserDataStart(state, action);
    case actionTypes.FETCH_USER_DATA_SUCCESS:
      return fetchUserDataSuccess(state, action);
    case actionTypes.FETCH_USER_DATA_FAILED:
      return fetchUserDataFailed(state, action);
    case actionTypes.ADD_USER_POST_START:
      return addUserPostStart(state, action);
    case actionTypes.ADD_USER_POST_SUCCESS:
      return addUserPostSuccess(state, action);
    case actionTypes.ADD_USER_POST_FAILED:
      return addUserPostFailed(state, action);
    case actionTypes.FETCH_USER_POSTS_START:
      return fetchUserPostsStart(state, action);
    case actionTypes.FETCH_USER_POSTS_SUCCESS:
      return fetchUserPostsSuccess(state, action);
    case actionTypes.FETCH_USER_POSTS_FAILED:
      return fetchUserPostsFailed(state, action);
    default:
      return state;
  }
};

/**
 * New User Sign Up Reducer Method's Starts
 */

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

/**
 * New User Sign Up Reducer Method's Ends
 */

/**
 * Fetch User Data Reducer Method's Starts
 */
const fetchUserDataStart = (state, action) => {
  return updateObject(state, { fetchUserLoading: true, error: false });
};

const fetchUserDataSuccess = (state, action) => {
  return updateObject(state, {
    fetchUserLoading: false,
    error: false,
    user: action.user
  });
};

const fetchUserDataFailed = (state, action) => {
  return updateObject(state, { fetchUserLoading: false, error: true });
};

/**
 * Fetch User Data Reducer Method's Ends
 */

/**
 * New User Post Reducer Method's Starts
 */
const addUserPostStart = (state, action) => {
  return updateObject(state, { loading: true, error: false });
};

const addUserPostSuccess = (state, action) => {
  const newPost = updateObject(action.postData);
  return updateObject(state, {
    loading: false,
    error: false,
    posts: state.posts.concat(newPost)
  });
};

const addUserPostFailed = (state, action) => {
  return updateObject(state, { loading: false, error: true });
};

/**
 * New User Post Reducer Method's Ends
 */

/**
 * Fetch User Posts Reducer Method's Starts
 */
const fetchUserPostsStart = (state, action) => {
  return updateObject(state, { fetchUserPostsLoading: true, error: false });
};

const fetchUserPostsSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
    fetchUserPostsLoading: false,
    error: false
  });
};

const fetchUserPostsFailed = (state, action) => {
  return updateObject(state, { fetchUserPostsLoading: false, error: true });
};

/**
 * Fetch User Posts Reducer Method's Ends
 */

export default userReducer;

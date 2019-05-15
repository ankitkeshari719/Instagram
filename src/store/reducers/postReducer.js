import * as actionTypes from "../actionTypes/actionTypes";
import { updateObject } from "../../shared";

const initialState = {
  posts: [],
  loading: false,
  error: false
};

const addPostStart = (state, action) => {
  return updateObject(state, { loading: true, error: false });
};

const addPostSuccess = (state, action) => {
  const newPost = updateObject(action.postData);
  return updateObject(state, {
    loading: false,
    error: false,
    posts: state.posts.concat(newPost)
  });
};

const addPostFailed = (state, action) => {
  return updateObject(state, { loading: false, error: true });
};

const fetchPostsStart = (state, action) => {
  return updateObject(state, { loading: true, error: false });
};

const fetchPostsSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
    loading: false,
    error: false
  });
};

const fetchPostsFailed = (state, action) => {
  return updateObject(state, { loading: false, error: true });
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POSTS_START:
      return addPostStart(state, action);
    case actionTypes.ADD_POSTS_SUCCESS:
      return addPostSuccess(state, action);
    case actionTypes.ADD_POSTS_FAILED:
      return addPostFailed(state, action);
    case actionTypes.FETCH_POSTS_START:
      return fetchPostsStart(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action);
    case actionTypes.FETCH_POSTS_FAILED:
      return fetchPostsFailed(state, action);
    default:
      return state;
  }
};

export default postReducer;

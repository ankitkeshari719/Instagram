import * as actionTypes from "../actionTypes/actionTypes";
import axios from "../../axios";

export const addPostStart = () => {
  return {
    type: actionTypes.ADD_POSTS_START
  };
};

export const addPostSuccess = postData => {
  return {
    type: actionTypes.ADD_POSTS_SUCCESS,
    postData: postData
  };
};

export const addPostFailed = error => {
  return {
    type: actionTypes.FETCH_POSTS_FAILED,
    error: error
  };
};

export const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START
  };
};

export const fetchPostsSuccess = posts => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: posts
  };
};

export const fetchPostsFailed = error => {
  return {
    type: actionTypes.FETCH_POSTS_FAILED,
    error: error
  };
};

/**
 * Action to add a new post
 * @param  postData All the post data
 * @return
 */
export const addPost = postData => {
  return dispatch => {
    dispatch(addPostStart());
    axios
      .post("/posts.json", postData)
      .then(response => {
        dispatch(addPostSuccess(postData));
      })
      .catch(error => {
        dispatch(addPostFailed(error));
      });
  };
};

/**
 * Action to  fetch all post
 * @param  postData All the post data
 * @return
 */
export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsStart());
    axios
      .get("/posts.json")
      .then(res => {
        const fetchedPosts = [];
        for (let key in res.data) {
          fetchedPosts.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchPostsSuccess(fetchedPosts));
      })
      .catch(err => {
        dispatch(fetchPostsFailed(err));
      });
  };
};

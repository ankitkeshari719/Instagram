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
 * Action to fetch user data
 * @return
 */
export const fetchUser = () => {
  return dispatch => {
    dispatch(fetchUserDataStart());
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
        dispatch(fetchUserDataSuccess(fetchedUser[0]));
      })
      .catch(err => {
        dispatch(fetchUserDataFailed(err));
      });
  };
};

/**
 * Action to add a new user post
 * @param  userPostData All the userPostData new post data
 * @return
 */
export const addUserPost = userPostData => {
  return dispatch => {
    dispatch(addUserPostStart());
    axios
      .post("/userPosts.json", userPostData)
      .then(response => {
        dispatch(addUserPostSuccess(userPostData));
      })
      .catch(error => {
        dispatch(addUserPostFailed(error));
      });
  };
};

/**
 * Action to fetch all user posts
 * @return
 */
export const fetchUserPosts = () => {
  return dispatch => {
    dispatch(fetchUserPostsStart());
    axios
      .get("/userPosts.json")
      .then(res => {
        const fetchedUserPosts = [];
        for (let key in res.data) {
          fetchedUserPosts.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchUserPostsSuccess(fetchedUserPosts));
      })
      .catch(err => {
        dispatch(fetchUserPostsFailed(err));
      });
  };
};

/**
 * New User Sign Up Action Method's Starts
 */

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
 * New User Sign Up Action Method's Ends
 */

/**
 * Fetch User Data Action Method's Starts
 */
export const fetchUserDataStart = () => {
  return {
    type: actionTypes.FETCH_USER_DATA_START
  };
};

export const fetchUserDataSuccess = user => {
  return {
    type: actionTypes.FETCH_USER_DATA_SUCCESS,
    user: user
  };
};

export const fetchUserDataFailed = error => {
  return {
    type: actionTypes.FETCH_USER_DATA_FAILED,
    error: error
  };
};

/**
 * Fetch User Data Action Method's Ends
 */

/**
 * New User Post Action Method's Starts
 */

export const addUserPostStart = () => {
  return {
    type: actionTypes.ADD_USER_POST_START
  };
};

export const addUserPostSuccess = userPostData => {
  return {
    type: actionTypes.ADD_USER_POST_SUCCESS,
    userPostData: userPostData
  };
};

export const addUserPostFailed = error => {
  return {
    type: actionTypes.ADD_USER_POST_FAILED,
    error: error
  };
};

/**
 * New User Post Action Method's Ends
 */

/**
 * Fetch User Posts Action Method's Starts
 */
export const fetchUserPostsStart = () => {
  return {
    type: actionTypes.FETCH_USER_POSTS_START
  };
};

export const fetchUserPostsSuccess = userPosts => {
  return {
    type: actionTypes.FETCH_USER_POSTS_SUCCESS,
    userPosts: userPosts
  };
};

export const fetchUserPostsFailed = error => {
  return {
    type: actionTypes.FETCH_USER_POSTS_FAILED,
    error: error
  };
};
/**
 * Fetch User Posts Action Method's Starts
 */

export * from "./actionTypes/actionTypes";
export { default as PostReducer } from "./reducers/postReducer";
export { default as UserReducer } from "./reducers/userReducer";
export { addPost, fetchPosts } from "./actions/postAction";
export {
  addNewUser,
  fetchUser,
  addUserPost,
  fetchUserPosts
} from "./actions/UserAction";

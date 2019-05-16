import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser, fetchUserPosts } from "../../store";
import UserHeader from "./UserHeader/UserHeader";
import UserPosts from "./UserPosts/UserPosts";
import { AddNewOtherPost } from "../../components";

class UserProfile extends Component {
  render() {
    return (
      <>
        <UserHeader />
        <UserPosts />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchUserLoading: state.userReducr.fetchUserLoading,
    fetchUserPostsLoading: state.userReducr.fetchUserPostsLoading
  };
};

const mapDisatchToProps = dispatch => {
  return bindActionCreators(
    { onFetchUser: fetchUser, onFetchUserPosts: fetchUserPosts },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDisatchToProps
)(UserProfile);

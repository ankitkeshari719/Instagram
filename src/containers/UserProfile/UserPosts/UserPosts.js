import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserPosts } from "../../../store";
import { Spinner, UserPost } from "../../../components";

class UserPosts extends Component {
  componentDidMount() {
    this.props.onFetchUserPosts();
  }

  render() {
    const { userPosts, isLoading } = this.props;
    let fetchedUserPosts = isLoading ? (
      <Spinner />
    ) : (
      userPosts.map(post => <UserPost key={post.id} {...post} />)
    );
    return fetchedUserPosts;
  }
}

const mapStateToProps = state => {
  return {
    userPosts: state.userReducr.userPosts,
    isLoading: state.userReducr.fetchUserPostsLoading,
    error: state.userReducr.error
  };
};

const mapDisatchToProps = dispatch => {
  return bindActionCreators({ onFetchUserPosts: fetchUserPosts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDisatchToProps
)(UserPosts);

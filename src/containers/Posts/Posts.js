import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../../store";
import { Spinner, Post } from "../../components";

class Posts extends Component {
  componentDidMount() {
    this.props.onFetchPosts();
  }

  render() {
    const { posts, isLoading } = this.props;
    let fetchedPosts = isLoading ? (
      <Spinner />
    ) : (
      posts.map(post => <Post key={post.id} {...post} />)
    );

    return <div>{fetchedPosts}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducr.posts,
    isLoading: state.postReducr.loading,
    error: state.postReducr.error
  };
};

const mapDisatchToProps = dispatch => {
  return bindActionCreators({ onFetchPosts: fetchPosts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDisatchToProps
)(Posts);

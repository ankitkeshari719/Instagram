import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "../..";
import { addPost } from "../../../store";

const AddNewOtherPost = props => {
  let addNewUserPostHandler = () => {
    const userPostData = {
      user: {
        userId: "5",
        nickname: "Yemini",
        userName: "Doruk Yemenici",
        avatar:
          "https://images.unsplash.com/profile-1550500952952-22b4755874e6?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
      },
      image:
        "https://images.unsplash.com/photo-1557962677-6283cfe07931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      noOfLikes: "789",
      noOfComments: "6",
      type: "gallery",
      caption: "Journey Forever! 💪",
      location: "Sydney"
    };

    props.onAddPost(userPostData);
  };

  return (
    <div>
      <Button btnType="Success" clicked={addNewUserPostHandler}>
        Add New Post
      </Button>
    </div>
  );
};

const mapDisatchToProps = dispatch => {
  return bindActionCreators({ onAddPost: addPost }, dispatch);
};

export default connect(
  null,
  mapDisatchToProps
)(AddNewOtherPost);

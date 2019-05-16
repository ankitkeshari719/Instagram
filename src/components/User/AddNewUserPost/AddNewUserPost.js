import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "../..";
import { addUserPost } from "../../../store";

const AddNewUserPost = props => {
  let addNewUserPostHandler = () => {
    const userPostData = {
      user: {
        userId: "1",
        nickname: "reactjsacademy",
        userName: "ReactJS Academy",
        avatar:
          "https://scontent-sin2-2.cdninstagram.com/vp/dddb01bd4d1e13e055bbd8eb758e77d9/5D555471/t51.2885-19/s150x150/15876177_1651110208519461_862989260548997120_a.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com"
      },
      image:
        "https://scontent.cdninstagram.com/vp/31eb78edac09ad38a80c3f2ce2d9bf5d/5D50C4DD/t51.2885-15/e15/s480x480/57487969_433020293931058_2894129383843542973_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com",
      noOfLikes: "1354",
      noOfComments: "738",
      type: "gallery",
      caption: "The #London Part-time course has officially started! 💪",
      location: "London"
    };

    props.onAddUserPost(userPostData);
  };

  return (
    <div>
      <Button btnType="Success" clicked={addNewUserPostHandler}>
        Add New User Post
      </Button>
    </div>
  );
};

const mapDisatchToProps = dispatch => {
  return bindActionCreators({ onAddUserPost: addUserPost }, dispatch);
};

export default connect(
  null,
  mapDisatchToProps
)(AddNewUserPost);

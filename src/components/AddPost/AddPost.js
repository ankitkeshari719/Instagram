import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "..";
import { addPost } from "../../store";

const AddPost = props => {
  const newPost = {
    id: "d",
    user: {
      userId: "1",
      nickname: "Chris",
      avatar:
        "https://static1.squarespace.com/static/5a1ac3782278e73e3d5e00cd/t/5a5ffa9cf9619a7f88fb2a92/1516239599550/IMG-20180118-WA0003%5B1%5D.jpg"
    },
    caption: "Big Bad Wolf!",
    image:
      "https://images.unsplash.com/photo-1539804990393-43bfc873dc60?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  };

  return (
    <div>
      <Button clicked={() => props.onAddPost(newPost)}>Add New Post</Button>
    </div>
  );
};

const mapDisatchToProps = dispatch => {
  return bindActionCreators({ onAddPost: addPost }, dispatch);
};

export default connect(
  null,
  mapDisatchToProps
)(AddPost);

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "../../components";
import { addNewUser } from "../../store";

class SignUp extends Component {
  addUserHandler = () => {
    const userData = {
      image: "",
      userName: "",
      noOfPosts: "",
      follwers: "",
      following: "",
      biography: ""
    };
    this.props.onAddNewUser(userData);
  };

  render() {
    return (
      <div>
        <Button btnType="Success" clicked={this.addUserHandler}>
          Add New User
        </Button>
      </div>
    );
  }
}

const mapDisatchToProps = dispatch => {
  return bindActionCreators({ onAddNewUser: addNewUser }, dispatch);
};

export default connect(
  null,
  mapDisatchToProps
)(SignUp);

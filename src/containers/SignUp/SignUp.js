import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "../../components";
import { addNewUser } from "../../store";

class SignUp extends Component {
  addUserHandler = () => {
    const userData = {
      image:
        "https://scontent-sin2-2.cdninstagram.com/vp/dddb01bd4d1e13e055bbd8eb758e77d9/5D555471/t51.2885-19/s150x150/15876177_1651110208519461_862989260548997120_a.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com",
      userName: "reactjsacademy",
      name: "ReactJS Academy",
      noOfPosts: "308",
      follwers: "1793",
      following: "53",
      biography:
        "Take your dev career further by mastering the React ecosystem",
      biolist: [
        "⛺️ Bootcamps",
        "🕡 Part-time",
        "📲React Native",
        "NEXT IN LONDON",
        "BOOTCAMP JULY 7"
      ],
      followedBy: ["solutionsdoth", "halfstack2019", "jsconf.am"]
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

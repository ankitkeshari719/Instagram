import React, { Component } from "react";
import UserHeader from "./UserHeader/UserHeader";
import UserPost from "./UserPost/UserPost";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <UserHeader />
        <UserPost />
      </div>
    );
  }
}

export default UserProfile;

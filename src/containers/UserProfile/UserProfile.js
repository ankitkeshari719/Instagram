import React, { Component } from "react";

import UserPost from "./UserPost/UserPost";
import UserHead from "./UserHeader/UserHeader";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <UserHead/>
        <UserPost />
      </div>
    );
  }
}

export default UserProfile;

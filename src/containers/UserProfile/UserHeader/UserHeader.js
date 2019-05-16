import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../../store";
import classes from "../UserProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

class UserHead extends Component {
  componentDidMount() {
    this.props.onFetchUser();
  }

  render() {
    let header = null;
    if (this.props.user) {
      const {
        image,
        userName,
        name,
        noOfPosts,
        follwers,
        following,
        biography,
        biolist,
        followedBy
      } = this.props.user;

      header = (
        <header>
          <div className={classes.container}>
            <div className={classes.profile}>
              <div className={classes.profile_image}>
                <img src={image} alt="profile_image" />
              </div>
              <div className={classes.profile_user_settings}>
                <h1 className={classes.profile_user_name}>{userName}</h1>
                <button
                  className={[classes.btn, classes.profile_edit_btn].join(" ")}
                >
                  Edit Profile
                </button>
                <button
                  className={[classes.btn, classes.profile_settings_btn].join(
                    " "
                  )}
                  aria-label="profile settings"
                >
                  <FontAwesomeIcon icon={faCog} />
                </button>
              </div>
              <div className={classes.profile_stats}>
                <ul>
                  <li>
                    <span className={classes.profile_stat_count}>
                      {noOfPosts}
                    </span>
                    &nbsp;posts
                  </li>
                  <li>
                    <span className={classes.profile_stat_count}>
                      {follwers}
                    </span>
                    &nbsp;followers
                  </li>
                  <li>
                    <span className={classes.profile_stat_count}>
                      {following}
                    </span>
                    &nbsp;following
                  </li>
                </ul>
              </div>
              <div className={classes.profile_bio}>
                <div className={classes.profile_real_name}>{name}</div>
                {biography}
                {biolist.map(bio => (
                  <div
                    className={classes.profile_bio_list}
                    key={bio + new Date()}
                  >
                    {bio}
                  </div>
                ))}
                <div className={classes.profile_followed_by}>
                  <small>Followed by</small>
                  {followedBy.map((fBy, index) => {
                    if (index === followedBy.length - 1) {
                      return (
                        <small>
                          &nbsp;and <b> {fBy}</b>
                        </small>
                      );
                    } else {
                      return (
                        <small>
                          <b> {fBy}</b>,
                        </small>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>
      );
    }

    return header;
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducr.user,
    isLoading: state.userReducr.loading,
    error: state.userReducr.error
  };
};

const mapDisatchToProps = dispatch => {
  return bindActionCreators({ onFetchUser: fetchUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDisatchToProps
)(UserHead);

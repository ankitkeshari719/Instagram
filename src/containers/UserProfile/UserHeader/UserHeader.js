import React from "react";
import classes from "../UserProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const UserHeader = () => {
  return (
    <div>
      <header>
        <div className={classes.container}>
          <div className={classes.profile}>
            <div className={classes.profile_image}>
              <img
                src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                alt="profile_image"
              />
            </div>
            <div className={classes.profile_user_settings}>
              <h1 className={classes.profile_user_name}>janedoe_</h1>
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
                  <span className={classes.profile_stat_count}>164</span>
                  &nbsp;posts
                </li>
                <li>
                  <span className={classes.profile_stat_count}>188</span>
                  &nbsp;followers
                </li>
                <li>
                  <span className={classes.profile_stat_count}>206</span>
                  &nbsp;following
                </li>
              </ul>
            </div>
            <div className={classes.profile_bio}>
              <p>
                <span className={classes.profile_real_name}>Jane Doe</span>{" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserHeader;

import React from "react";
import classes from "./UserPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faClone,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

function UserPost(props) {
  const { image, noOfComments, noOfLikes, type } = props;
  return (
    <div>
      <main>
        <div className={classes.gallery}>
          <div className={classes.gallery_item} tabIndex="0">
            <img
              src={image}
              className={classes.gallery_image}
              alt="gallery_image"
            />
            <div className={classes.gallery_item_type}>
              <span className={classes.visually_hidden}>Video</span>
              <FontAwesomeIcon icon={type === "vedio" ? faVideo : faClone} />
            </div>
            <div className={classes.gallery_item_info}>
              <ul>
                <li className={classes.gallery_item_likes}>
                  <span className={classes.visually_hidden}>Likes:</span>
                  <FontAwesomeIcon icon={faHeart} /> {noOfLikes}
                </li>
                <li className={classes.gallery_item_comments}>
                  <span className={classes.visually_hidden}>Comments:</span>
                  <FontAwesomeIcon icon={faComment} /> {noOfComments}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserPost;

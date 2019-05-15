import React, { Component } from "react";
import classes from "./Post.css";

class Post extends Component {
  render() {
    const { nickname, avatar } = this.props.user;
    const { image, caption, location } = this.props;
    return (
      <article className={classes.Post} ref="Post">
        <header>
          <div className={classes.Post_user}>
            <div className={classes.Post_user_avatar}>
              <img src={avatar} alt={nickname} />
            </div>
            <div>
              <div className={classes.Post_user_nickname}>{nickname}</div>
              <div>
                <small className={classes.Post_user_location}>{location}</small>
              </div>
            </div>
          </div>
        </header>
        <div className={classes.Post_image}>
          <div className={classes.Post_image_bg}>
            <img alt={caption} src={image} />
          </div>
        </div>
        <div className={classes.Post_caption}>
          <strong>{nickname}</strong> {caption}
        </div>
      </article>
    );
  }
}

export default Post;

import React from "react";
import classes from "../UserProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faClone,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

const UserPost = () => {
  return (
    <div>
      <main>
        <div className={classes.containe}>
          <div className={classes.gallery}>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 56
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 2
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 89
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 5
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_type}>
                <span className={classes.visually_hidden}>Gallery</span>
                <FontAwesomeIcon icon={faClone} />
              </div>
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 42
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 1
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_type}>
                <span className={classes.visually_hidden}>Video</span>
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 38
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 0
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_type}>
                <span className={classes.visually_hidden}>Gallery</span>
                <FontAwesomeIcon icon={faClone} />
              </div>
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 47
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 1
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />

              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 94
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 3
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />

              <div className={classes.galler_item_type}>
                <span className={classes.visually_hidden}>Gallery</span>
                <FontAwesomeIcon icon={faClone} />
              </div>
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 52
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 4
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 66
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 2
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 56
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 2
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 89
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 5
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_type}>
                <span className={classes.visually_hidden}>Gallery</span>
                <FontAwesomeIcon icon={faClone} />
              </div>
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 42
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 1
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_type}>
                <span className={classes.visually_hidden}>Video</span>
                              <FontAwesomeIcon icon={faClone} />
              </div>
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 38
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 0
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_type}>
                <span className={classes.visually_hidden}>Gallery</span>
                <FontAwesomeIcon icon={faClone} />
              </div>
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 47
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 1
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />

              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 94
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 3
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />

              <div className={classes.galler_item_type}>
                <span className={classes.visually_hidden}>Gallery</span>
                <FontAwesomeIcon icon={faClone} />
              </div>
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 52
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 4
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.gallery_item} tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
                className={classes.gallery_image}
                alt=""
              />
              <div className={classes.gallery_item_info}>
                <ul>
                  <li className={classes.gallery_item_likes}>
                    <span className={classes.visually_hidden}>Likes:</span>
                    <FontAwesomeIcon icon={faHeart} /> 66
                  </li>
                  <li className={classes.gallery_item_comments}>
                    <span className={classes.visually_hidden}>Comments:</span>
                    <FontAwesomeIcon icon={faComment} /> 2
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.loader} />
        </div>
      </main>
    </div>
  );
};

export default UserPost;

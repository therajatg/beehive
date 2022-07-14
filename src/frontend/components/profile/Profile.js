import { useEffect, useState } from "react";
import { CommentModal, EditProfileModal } from "../index";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts, editUserDetail, getUser } from "../../features/index";
import style from "./profile.module.css";
import { Link } from "react-router-dom";
import {
  getSinglePost,
  addComment,
  likePost,
  dislikePost,
  removeBookmark,
  addBookmark,
} from "../../features/index";
import { sortPosts } from "../../helpers/index";

export function Profile({
  userDetail,
  commentModal,
  setCommentModal,
  editProfileModal,
  setEditProfileModal,
}) {
  const {
    username,
    firstName,
    lastName,
    followers,
    following,
    avatarURL,
    about,
    website,
  } = userDetail;
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.auth);
  const { bookmarks, singlePost, posts } = useSelector((store) => store.posts);
  const { userPosts } = useSelector((store) => store.user);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getUserPosts(username));
  }, [username, posts]);

  const commentClickHandler = (_id) => {
    setCommentModal((prev) => !prev);
    setId(_id);
  };

  return (
    <div className="content">
      <div className={style.top}>
        <p className={style.title}>
          {firstName} {lastName}
        </p>

        <img
          src="https://res.cloudinary.com/therajatg/image/upload/v1657198669/social%20media/beehive1_phb9wr.png"
          alt="profile-banner"
          className={style.profileBanner}
        />

        <img src={avatarURL} alt="profil-pic" className={style.profilePic} />
        <div className={style.topContent}>
          <div className={style.nameAndEditBtn}>
            <p>
              {firstName} {lastName}
              <br />
              <span className="lightText">@{username}</span>
            </p>

            <button
              className={style.editBtn}
              onClick={() => setEditProfileModal((prev) => !prev)}
            >
              Edit Profile
            </button>
          </div>

          <p className={style.userBio}>{about}</p>
          <a href={user.website} className={style.userWebsite}>
            {website}
          </a>
          <p className={style.numbers}>
            {userPosts.length} <span className="lightText">Posts</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {following.length} <span className="lightText">Following</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {followers.length} <span className="lightText">Followers</span>
          </p>
        </div>
      </div>
      {userPosts?.length > 0 ? (
        sortPosts(userPosts)?.map(
          ({
            content,
            _id,
            avatarURL,
            firstName,
            lastName,
            username,
            comments,
            likes,
          }) => (
            <div className={style.post} key={_id}>
              <Link to={`/page/${_id}`} className={style.postContent}>
                <img src={avatarURL} alt="profile-pic" className="profilePic" />
                <div>
                  <p>
                    {firstName} {lastName}{" "}
                    <span className="lightText">@{username}</span>
                  </p>
                  <p className={style.text}>{content}</p>
                </div>
              </Link>
              <div className={style.actions}>
                <div className={style.action}>
                  <BiCommentDetail
                    title="comment"
                    onClick={() => commentClickHandler(_id)}
                  />
                  {comments.length > 0 && comments.length}
                </div>
                <div className={style.action}>
                  {likes?.likedBy?.some(
                    (person) => person.username === user.username
                  ) ? (
                    <AiFillHeart
                      title="like"
                      className={style.fillColor}
                      onClick={() =>
                        dispatch(dislikePost({ postId: _id, token }))
                      }
                    />
                  ) : (
                    <AiOutlineHeart
                      title="like"
                      onClick={() => dispatch(likePost({ postId: _id, token }))}
                    />
                  )}

                  {likes.likedBy.length > 0 && likes.likedBy.length}
                </div>
                {bookmarks?.some((post) => post._id === _id) ? (
                  <BsFillBookmarkFill
                    title="bookmark"
                    className={style.fillColor}
                    onClick={() =>
                      dispatch(removeBookmark({ postId: _id, token }))
                    }
                  />
                ) : (
                  <BsBookmark
                    title="bookmark"
                    onClick={() =>
                      dispatch(addBookmark({ postId: _id, token }))
                    }
                  />
                )}
              </div>

              {commentModal ? (
                <CommentModal
                  dispatch={dispatch}
                  getSinglePost={getSinglePost}
                  singlePost={singlePost}
                  addComment={addComment}
                  postId={id}
                  token={token}
                  setCommentModal={setCommentModal}
                />
              ) : null}

              {editProfileModal ? (
                <EditProfileModal
                  editUserDetail={editUserDetail}
                  dispatch={dispatch}
                  token={token}
                  user={user}
                  setEditProfileModal={setEditProfileModal}
                />
              ) : null}
            </div>
          )
        )
      ) : (
        <p className={style.noPost}>Not posted anything yet!</p>
      )}
    </div>
  );
}
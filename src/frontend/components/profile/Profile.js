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
  getAllPosts,
  getSinglePost,
  addPost,
  addComment,
  likePost,
  dislikePost,
  removeBookmark,
  addBookmark,
  getAllUsers,
} from "../../features/index";

export function Profile({
  commentModal,
  setCommentModal,
  editProfileModal,
  setEditProfileModal,
}) {
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.auth);
  const { bookmarks, singlePost, posts } = useSelector((store) => store.posts);
  const { userPosts } = useSelector((store) => store.user);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getUserPosts(user.username)).then((res) => console.log(res));
  }, [posts]);

  const commentClickHandler = (_id) => {
    setCommentModal((prev) => !prev);
    setId(_id);
  };

  return (
    <div className="content">
      <div className={style.top}>
        <p className={style.title}>
          {user.firstName} {user.lastName}
        </p>

        <img
          src="https://res.cloudinary.com/therajatg/image/upload/v1657198669/social%20media/beehive1_phb9wr.png"
          alt="profile-banner"
          className={style.profileBanner}
        />

        <img
          src={user.avatarURL}
          alt="profil-pic"
          className={style.profilePic}
        />
        <div className={style.topContent}>
          <p className={style.nameAndEditBtn}>
            <p>
              {user.firstName} {user.lastName}
              <br />
              <span className="lightText">@{user.username}</span>
            </p>

            <button
              className={style.editBtn}
              onClick={() => setEditProfileModal((prev) => !prev)}
            >
              Edit Profile
            </button>
          </p>

          <p className={style.userBio}>{user.about}</p>
          <a href={user.website} className={style.userWebsite}>
            {user.website}
          </a>
          <p className={style.numbers}>
            {userPosts.length} <span className="lightText">Posts</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {user.following.length} <span className="lightText">Following</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {user.followers.length} <span className="lightText">Followers</span>
          </p>
        </div>
      </div>
      {userPosts?.map(
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
          <div className={style.post}>
            <Link to={`/${_id}`} className={style.postContent}>
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
              <div>
                <BiCommentDetail
                  title="comment"
                  onClick={() => commentClickHandler(_id)}
                />
                {comments.length > 0 && comments.length}
              </div>
              <div>
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
                  onClick={() => dispatch(addBookmark({ postId: _id, token }))}
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
      )}
    </div>
  );
}

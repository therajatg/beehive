import style from "./explore.module.css";
import { Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getSinglePost,
  addComment,
  likePost,
  dislikePost,
  removeBookmark,
  addBookmark,
} from "../../features/index";
import { useState, useEffect } from "react";
import { CommentModal } from "../index";

export function Explore({ commentModal, setCommentModal }) {
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const { posts, singlePost, bookmarks } = useSelector((store) => store.posts);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [posts]);

  const commentClickHandler = (_id) => {
    setCommentModal((prev) => !prev);
    setId(_id);
  };

  return (
    <div className="content">
      <p className={style.title}>Explore</p>
      {posts.map(
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
          <div key={_id}>
            <div className={style.post}>
              <Link to={`/page/${_id}`} className={style.postContent}>
                <img src={avatarURL} alt="profile-pic" className="profilePic" />

                <div>
                  <p>
                    <span>
                      {firstName} {lastName}{" "}
                    </span>

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
                  {comments?.length > 0 && comments?.length}
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

                  {likes?.likedBy?.length > 0 && likes?.likedBy?.length}
                </div>
                {bookmarks?.length > 0 &&
                bookmarks?.some((post) => post._id === _id) ? (
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
                  key={id}
                />
              ) : null}
            </div>
          </div>
        )
      )}
    </div>
  );
}

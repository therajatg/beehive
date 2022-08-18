import { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePost,
  addComment,
  likePost,
  dislikePost,
  addBookmark,
  removeBookmark,
} from "../../features/index";
import { CommentModal } from "../index";
import style from "./singlePostDetail.module.css";
import { Link } from "react-router-dom";

export function SinglePostDetail({ commentModal, setCommentModal }) {
  const { component } = useParams();
  const dispatch = useDispatch();
  const { bookmarks, posts, singlePost } = useSelector((store) => store?.posts);
  const { token, user } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getSinglePost(component));
  }, [posts, singlePost]);

  const username = singlePost?.username;

  return (
    <div className="content">
      {commentModal ? (
        <CommentModal
          dispatch={dispatch}
          getSinglePost={getSinglePost}
          singlePost={singlePost}
          addComment={addComment}
          postId={singlePost?._id}
          token={token}
          setCommentModal={setCommentModal}
        />
      ) : null}
      <h2 className={style.title}>Post</h2>
      <div className={style.post}>
        <div className={style.postContent}>
          <Link to={`/profile/${username}`}>
            {" "}
            <img
              className="profilePic"
              src={singlePost?.avatarURL}
              alt="Profile-Pic"
            />
          </Link>

          <div>
            <p className={style.name}>
              <span>
                {singlePost?.firstName} {singlePost?.lastName}{" "}
              </span>
              <span className="lightText">@{singlePost?.username}</span>
            </p>
            <p className={style.text}>{singlePost?.content}</p>
          </div>
        </div>

        <div className={style.actions}>
          <div className={style.action}>
            <BiCommentDetail
              title="comment"
              onClick={() => setCommentModal(true)}
            />
            {singlePost?.comments?.length > 0 && singlePost?.comments?.length}
          </div>
          <div className={style.action}>
            {singlePost?.likes?.likedBy.some(
              (person) => person.username === user.username
            ) ? (
              <AiFillHeart
                title="like"
                className={style.fillColor}
                onClick={() =>
                  dispatch(dislikePost({ postId: singlePost?._id, token }))
                }
              />
            ) : (
              <AiOutlineHeart
                title="like"
                onClick={() =>
                  dispatch(likePost({ postId: singlePost?._id, token }))
                }
              />
            )}
            {singlePost?.likes?.likedBy.length > 0 &&
              singlePost?.likes?.likedBy.length}
          </div>
          {bookmarks.length > 0 &&
          bookmarks?.some((post) => post._id === singlePost?._id) ? (
            <BsFillBookmarkFill
              title="bookmark"
              className={style.fillColor}
              onClick={() =>
                dispatch(removeBookmark({ postId: singlePost?._id, token }))
              }
            />
          ) : (
            <BsBookmark
              title="bookmark"
              onClick={() =>
                dispatch(addBookmark({ postId: singlePost?._id, token }))
              }
            />
          )}
        </div>
      </div>

      {singlePost?.comments?.map(
        ({ text, avatarURL, _id, firstName, lastName, username }) => (
          <div className={style.post} key={_id}>
            <div className={style.postContent}>
              <Link to={`/profile/${username}`}>
                <img src={avatarURL} alt="profile-pic" className="profilePic" />
              </Link>

              <div>
                <p className={style.name}>
                  <span>
                    {firstName} {lastName}{" "}
                  </span>
                  <span className="lightText">@{username}</span>
                </p>
                <p className={style.text}>{text}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

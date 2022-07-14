import { useEffect } from "react";
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

export function SinglePostDetail({ commentModal, setCommentModal }) {
  const { component } = useParams();
  const dispatch = useDispatch();
  const { singlePost, bookmarks, posts } = useSelector((store) => store.posts);
  const { token, user } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getSinglePost(component));
  }, [posts]);

  return (
    <main>
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
        <h2>Post</h2>
        <div className={style.avatarAndInput}>
          <img
            className="profilePic"
            src={singlePost?.avatarURL}
            alt="Profile-Pic"
          />
          {singlePost?.content}
        </div>
        <div className={style.actions}>
          <div>
            <BiCommentDetail
              title="comment"
              onClick={() => setCommentModal(true)}
            />
            {singlePost?.comments.length > 0 && singlePost?.comments.length}
          </div>
          <div>
            {singlePost?.likes.likedBy.some(
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

            {singlePost?.likes.likedBy.length > 0 &&
              singlePost?.likes.likedBy.length}
          </div>
          {bookmarks?.some((post) => post._id === singlePost?._id) ? (
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
        {singlePost?.comments.map(({ text, avatarURL, votes, _id }) => (
          <div className={style.post} key={_id}>
            <div className={style.avatarAndInput}>
              <img src={avatarURL} alt="profile-pic" className="profilePic" />
              {text}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

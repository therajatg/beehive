import style from "./bookmarks.module.css";
import { useNavigate, Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
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
  getAllBookmarks,
} from "../../features/index";
import { useState, useEffect } from "react";
import { CommentModal } from "../index";

export function Bookmarks({ commentModal, setCommentModal }) {
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const { singlePost, posts } = useSelector((store) => store.posts);
  const bookmarks = useSelector((store) => store?.posts?.bookmarks);
  const [id, setId] = useState(null);

  const commentClickHandler = (_id) => {
    setCommentModal((prev) => !prev);
    setId(_id);
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, [posts]);

  const bookmarkedPosts = posts.filter((post) =>
    bookmarks.find((item) => item._id === post._id)
  );

  return (
    <div className="content">
      <div className={style.post}>
        <h2>Bookmarks</h2>
      </div>

      {bookmarkedPosts.map(({ content, _id, avatarURL, comments, likes }) => (
        <div key={_id}>
          <div className={style.post}>
            <Link to={`/${_id}`}>
              <img src={avatarURL} alt="profile-pic" className="profilePic" />
              {content}
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
                {likes.likedBy.some(
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
                key={id}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

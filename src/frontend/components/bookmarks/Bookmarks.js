import style from "./bookmarks.module.css";
import { Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
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
      <div className={style.top}>
        <p>Bookmarks</p>
      </div>
      {bookmarkedPosts.length > 0 ? (
        bookmarkedPosts.map(
          ({
            content,
            _id,
            avatarURL,
            comments,
            likes,
            firstName,
            lastName,
            username,
          }) => (
            <div key={_id}>
              <div className={style.post}>
                <Link to={`/page/${_id}`} className={style.postContent}>
                  {" "}
                  <img
                    src={avatarURL}
                    alt="profile-pic"
                    className="profilePic"
                  />
                  <div>
                    <p className={style.name}>
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
                    {comments.length > 0 && comments.length}
                  </div>

                  <div className={style.action}>
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
                        onClick={() =>
                          dispatch(likePost({ postId: _id, token }))
                        }
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
                    key={id}
                  />
                ) : null}
              </div>
            </div>
          )
        )
      ) : (
        <div className={style.noBookmark}>
          {" "}
          <p className={style.noBookmarkText}>No Bookmarked Posts!</p>
          <img
            src="https://res.cloudinary.com/therajatg/image/upload/v1657715118/social%20media/No_data_f7tvj1.svg"
            alt=""
          />
        </div>
      )}
      {}
    </div>
  );
}

import style from "./content.module.css";
import { useNavigate, Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart, AiFillDelete } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getAllPosts,
  getSinglePost,
  addPost,
  addComment,
  likePost,
  dislikePost,
  removeBookmark,
  addBookmark,
  deletePost,
} from "../../features/index";
import { useState, useEffect } from "react";
import { CommentModal } from "../index";
import { sortPosts } from "../../helpers/index";

export function Content({ commentModal, setCommentModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user } = useSelector((store) => store.auth);
  const { posts, singlePost, bookmarks } = useSelector((store) => store.posts);
  const [height, setHeight] = useState("auto");
  const [text, setText] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [posts]);

  const handleChange = (e) => {
    setText(e.target.value);
    setHeight(e.target.scrollHeight);
  };

  const postHandler = () => {
    if (token) {
      text.trim() === ""
        ? toast.error("Error. Please type something!")
        : dispatch(addPost({ postData: { content: text }, token }));
      setText("");
      setHeight("auto");
    } else {
      navigate("/login");
    }
  };

  const commentClickHandler = (_id) => {
    setCommentModal((prev) => !prev);
    setId(_id);
  };

  return (
    <div className="content">
      <div className={style.top}>
        <p className={style.title}>Home</p>
        <div className={style.avatarAndInput}>
          <Link to={`/profile/${user?.username}`}>
            <img
              className="profilePic"
              src={user?.avatarURL}
              alt="Profile-Pic"
            />
          </Link>

          <textarea
            onChange={(e) => handleChange(e)}
            style={{ height: height }}
            className={style.whatHappening}
            placeholder="What's Happening?"
            value={text}
          />
        </div>
        <button className={style.postBtn} onClick={postHandler}>
          Post
        </button>
      </div>

      {sortPosts(posts)
        .filter(
          (post) =>
            user?.following
              .map((item) => item?.username)
              .includes(post?.username) || post?.username === user?.username
        )
        .map(
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
                  <img
                    onClick={() => navigate(`/profile/${username}`)}
                    src={avatarURL}
                    alt="profile-pic"
                    className="profilePic"
                  />

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
                      (person) => person.username === user?.username
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

                    {likes?.likedBy?.length > 0 && likes?.likedBy?.length}
                  </div>

                  {bookmarks.length > 0 &&
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

import style from "./content.module.css";
import { useNavigate, Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getSinglePost,
  addPost,
  addComment,
} from "../../features/postsSlice";
import { useState, useEffect } from "react";
import { CommentModal } from "../index";

export function Content({ commentModal, setCommentModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store.auth.token);
  const { posts, singlePost } = useSelector((store) => store.posts);
  const [height, setHeight] = useState("auto");
  const [text, setText] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    setHeight(e.target.scrollHeight);
  };

  const postHandler = () => {
    if (token) {
      dispatch(addPost({ postData: { content: text }, token }));
      setText("");
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
      <div className={style.post}>
        <h2>Home</h2>
        <div className={style.avatarAndInput}>
          <img
            className={style.profilePic}
            src="https://res.cloudinary.com/therajatg/image/upload/v1655625579/social%20media/mypic_hejkou.jpg"
            alt="Profile-Pic"
          />
          <textarea
            onChange={(e) => handleChange(e)}
            style={{ height: height }}
            className={style.whatHappening}
            placeholder="What's Happening?"
            value={text}
          />
        </div>
        <button
          className={style.postBtn}
          onClick={(content, _id) => postHandler(content, _id)}
        >
          Post
        </button>
      </div>

      {posts.map(({ content, _id, avatarURL, comments, likes }) => (
        <div>
          <div className={style.post} key={_id}>
            <Link to={`/${_id}`}>
              <div className={style.avatarAndInput}>
                <img src={avatarURL} alt="profile-pic" className="profilePic" />
                {content}
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
                {likes.likeCount > 0 ? (
                  <div>
                    <AiFillLike />
                    {likes.likeCount}
                  </div>
                ) : (
                  <AiOutlineLike title="like" />
                )}
              </div>
              <div>
                <AiOutlineDislike title="dislike" />
                {likes.dislikedBy.length > 0 && likes.dislikedBy.length}
              </div>

              <BsBookmark title="bookmark" />
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

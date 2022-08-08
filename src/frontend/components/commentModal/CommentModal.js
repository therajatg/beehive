import React, { useEffect } from "react";
import { useState } from "react";
import style from "./commentModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { userReducer } from "../../features";
import { useSelector } from "react-redux";

export function CommentModal({
  dispatch,
  getSinglePost,
  singlePost,
  addComment,
  postId,
  token,
  setCommentModal,
}) {
  const [text, setText] = useState("");
  const [height, setHeight] = useState("auto");
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    setHeight(e.target.scrollHeight);
  };

  const addCommentHandler = () => {
    dispatch(addComment({ postId, commentData: { text }, token }));
    setCommentModal(false);
  };

  return (
    <div className={style.modal}>
      <div>
        <AiOutlineClose
          onClick={() => setCommentModal(false)}
          className={style.close}
        />
        <div className={style.avatarAndInput}>
          <img
            className="profilePic"
            src={singlePost?.avatarURL}
            alt="Profile-Pic"
          />
          {singlePost?.content}
        </div>
      </div>
      <div className={style.avatarAndInput}>
        <img src={user.avatarURL} alt="profilePic" className="profilePic" />
        <textarea
          onChange={handleChange}
          value={text}
          placeholder="post your reply"
          className={style.whatHappening}
          style={{ height: height }}
        ></textarea>
      </div>

      <button className={style.postBtn} onClick={addCommentHandler}>
        Post
      </button>
    </div>
  );
}

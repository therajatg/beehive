import React, { useEffect } from "react";
import { useState } from "react";
import style from "./commentModal.module.css";
import { AiOutlineClose } from "react-icons/ai";

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
        <AiOutlineClose onClick={() => setCommentModal(false)} />
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
        <img
          src="https://res.cloudinary.com/therajatg/image/upload/v1655625579/social%20media/mypic_hejkou.jpg"
          alt="profilePic"
          className="profilePic"
        />
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

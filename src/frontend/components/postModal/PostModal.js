import React from "react";
import { useState } from "react";
import style from "./postModal.module.css";
import { AiOutlineClose } from "react-icons/ai";

export function PostModal({ dispatch, addPost, token, setPostModal }) {
  const [text, setText] = useState("");
  const [height, setHeight] = useState("auto");

  const handleChange = (e) => {
    setText(e.target.value);
    setHeight(e.target.scrollHeight);
  };

  const postClickHandler = () => {
    dispatch(
      addPost({
        postData: { content: text },
        token,
      })
    );
    setPostModal(false);
  };
  return (
    <div className={style.modal}>
      <div>
        <AiOutlineClose onClick={() => setPostModal(false)} />
        <div className={style.avatarAndInput}>
          <img
            className={style.profilePic}
            src="https://res.cloudinary.com/therajatg/image/upload/v1655625579/social%20media/mypic_hejkou.jpg"
            alt="Profile-Pic"
          />
          <textarea
            onChange={handleChange}
            value={text}
            placeholder="What's Happening?"
            className={style.whatHappening}
            style={{ height: height }}
          ></textarea>
        </div>
      </div>

      <button onClick={postClickHandler} className={style.postBtn}>
        Post
      </button>
    </div>
  );
}

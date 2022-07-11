import { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost, addComment } from "../../features/postsSlice";
import { LeftNav, RightNav, CommentModal } from "../../components/index";
import style from "./singlePostDetail.module.css";

export function SinglePostDetail() {
  const postId = useParams();
  const dispatch = useDispatch();
  const singlePost = useSelector((store) => store.posts.singlePost);
  const token = useSelector((store) => store.auth.token);
  const [commentModal, setCommentModal] = useState(false);
  const [postModal, setPostModal] = useState(false);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, []);

  const { avatarURL, comments, content, likes, _id } = singlePost;

  return (
    <main className={commentModal && style.blur}>
      <LeftNav
        className={style.leftNav}
        postModal={postModal}
        setPostModal={setPostModal}
      />
      <div className={style.post}>
        {commentModal ? (
          <CommentModal
            dispatch={dispatch}
            getSinglePost={getSinglePost}
            singlePost={singlePost}
            addComment={addComment}
            postId={_id}
            token={token}
            setCommentModal={setCommentModal}
          />
        ) : null}
        <h2>Post</h2>
        <div className={style.avatarAndInput}>
          <img className="profilePic" src={avatarURL} alt="Profile-Pic" />
          {content}
        </div>
        <div className={style.actions}>
          <div>
            <BiCommentDetail
              title="comment"
              onClick={() => setCommentModal(true)}
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
        {singlePost.comments.map(({ text, avatarURL, votes, _id }) => (
          <div className={style.post} key={_id}>
            <div className={style.avatarAndInput}>
              <img src={avatarURL} alt="profile-pic" className="profilePic" />
              {text}
            </div>
            <div className={style.actions}>
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
            </div>
          </div>
        ))}
      </div>
      <RightNav className={style.rightNav} />
    </main>
  );
}

import {
  LeftNav,
  RightNav,
  Content,
  Explore,
  Bookmarks,
  Profile,
  SinglePostDetail,
} from "../../components/index";
import style from "./home.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function Home() {
  const [postModal, setPostModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const { component, username } = useParams();

  const { allUsers } = useSelector((store) => store.user);
  const userDetail =
    allUsers.find((person) => person.username === username) ?? null;

  return (
    <main
      className={
        postModal || commentModal || editProfileModal ? style.blur : style.main
      }
    >
      <LeftNav postModal={postModal} setPostModal={setPostModal} />
      {component === "home" && (
        <Content
          commentModal={commentModal}
          setCommentModal={setCommentModal}
        />
      )}
      {component === "explore" && (
        <Explore
          commentModal={commentModal}
          setCommentModal={setCommentModal}
        />
      )}
      {component === "bookmarks" && (
        <Bookmarks
          commentModal={commentModal}
          setCommentModal={setCommentModal}
        />
      )}
      {userDetail && (
        <Profile
          userDetail={userDetail}
          commentModal={commentModal}
          setCommentModal={setCommentModal}
          editProfileModal={editProfileModal}
          setEditProfileModal={setEditProfileModal}
        />
      )}
      {component?.length === 36 && (
        <SinglePostDetail
          commentModal={commentModal}
          setCommentModal={setCommentModal}
        />
      )}

      <RightNav />
    </main>
  );
}

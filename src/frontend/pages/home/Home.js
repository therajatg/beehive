import { LeftNav, RightNav, Content } from "../../components/index";
import style from "./home.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Bookmarks, Profile, SinglePostDetail } from "../../components/index";

export function Home() {
  const [postModal, setPostModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const { component } = useParams();

  return (
    <main
      className={(postModal || commentModal || editProfileModal) && style.blur}
    >
      <LeftNav postModal={postModal} setPostModal={setPostModal} />
      {component === "Home" && (
        <Content
          commentModal={commentModal}
          setCommentModal={setCommentModal}
        />
      )}
      {component === "Bookmarks" && (
        <Bookmarks
          commentModal={commentModal}
          setCommentModal={setCommentModal}
        />
      )}
      {component === "Profile" && (
        <Profile
          commentModal={commentModal}
          setCommentModal={setCommentModal}
          editProfileModal={editProfileModal}
          setEditProfileModal={setEditProfileModal}
        />
      )}
      {component?.length > 15 && (
        <SinglePostDetail
          commentModal={commentModal}
          setCommentModal={setCommentModal}
        />
      )}
      <RightNav />
    </main>
  );
}

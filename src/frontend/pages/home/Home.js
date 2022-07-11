import { LeftNav, RightNav, Content } from "../../components/index";
import style from "./home.module.css";
import { useState } from "react";

export function Home() {
  const [postModal, setPostModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  return (
    <main className={(postModal || commentModal) && style.blur}>
      <LeftNav postModal={postModal} setPostModal={setPostModal} />
      <Content commentModal={commentModal} setCommentModal={setCommentModal} />
      <RightNav />
    </main>
  );
}

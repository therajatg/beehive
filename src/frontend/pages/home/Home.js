import { LeftNav, RightNav, Content } from "../../components/index";
import style from "./home.module.css";
import { useEffect } from "react";
import axios from "axios";

export function Home() {
  return (
    <main>
      <LeftNav className={style.leftNav} />
      <Content />
      <RightNav className={style.rightNav} />
    </main>
  );
}

import { LeftNav, RightNav, Content } from "../../components/index";
import style from "./home.module.css";

export function Home() {
  return (
    <main>
      <LeftNav className={style.leftNav} />
      <Content />
      <RightNav className={style.rightNav} />
    </main>
  );
}

import style from "./rightNav.module.css";
import { FaSearch } from "react-icons/fa";

export function RightNav() {
  return (
    <div className={style.rightNav}>
      <div className={style.search}>
        <FaSearch className={style.searchIcon} />
        <input type="search" placeholder="Search Beehive" name="" id="" />
      </div>
      <div className={style.whoToFollow}>Who to follow</div>
    </div>
  );
}

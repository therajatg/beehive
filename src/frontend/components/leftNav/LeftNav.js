import style from "./leftNav.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaHashtag, FaUserAlt } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

export function LeftNav() {
  return (
    <div className={style.leftNav}>
      <div className={style.options}>
        <li>
          <IoIosPeople className={style.logo} />
        </li>
        <li>
          <AiFillHome />
          <p>Home</p>
        </li>
        <li>
          <FaHashtag />
          <p>Explore</p>
        </li>
        <li>
          <BsFillBookmarkFill />
          <p>Bookmarks</p>
        </li>
        <li>
          <FaUserAlt />
          <p>Profile</p>
        </li>
        <li>
          <button className={style.postBtn}>Tweet</button>
        </li>
      </div>
      <div className={style.profile}>
        <img
          className={style.profilePic}
          src="https://res.cloudinary.com/therajatg/image/upload/v1655625579/social%20media/mypic_hejkou.jpg"
          alt="Profile-Pic"
        />
        <div>
          <span>Rajat Gupta</span>
          <br />
          <span>@rajatg</span>
        </div>
      </div>
    </div>
  );
}

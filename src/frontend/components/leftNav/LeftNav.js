import style from "./leftNav.module.css";
import { AiFillHome, AiOutlineLogin } from "react-icons/ai";
import { FaHashtag, FaUserAlt } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import { addPost } from "../../features/postsSlice";
import { PostModal } from "../index";

export function LeftNav({ postModal, setPostModal }) {
  const token = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };
  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  const postHandler = () => {
    token ? setPostModal((prev) => !prev) : navigate("/login");
  };

  return (
    <div className={style.leftNav}>
      <div className={style.options}>
        <Link to="/">
          <IoIosPeople className={style.logo} />
        </Link>
        <Link to="/">
          <li>
            <AiFillHome />
            <p>Home</p>
          </li>
        </Link>
        <Link to="/explore">
          <li>
            <FaHashtag />
            <p>Explore</p>
          </li>
        </Link>
        <Link to="/bookmarks">
          <li>
            <BsFillBookmarkFill />
            <p>Bookmarks</p>
          </li>
        </Link>
        <Link to="/profile">
          <li>
            <FaUserAlt />
            <p>Profile</p>
          </li>
        </Link>
        {token ? (
          <li onClick={logoutHandler} className={style.login}>
            <AiOutlineLogin />
            Logout
          </li>
        ) : (
          <li onClick={loginHandler} className={style.login}>
            <AiOutlineLogin />
            Login
          </li>
        )}

        <li>
          <button className={style.postBtn} onClick={postHandler}>
            Post
          </button>
        </li>
      </div>
      <div className={style.profile}>
        <img
          className="profilePic"
          src="https://res.cloudinary.com/therajatg/image/upload/v1655625579/social%20media/mypic_hejkou.jpg"
          alt="Profile-Pic"
        />
        <div>
          <span>Rajat Gupta</span>
          <br />
          <span>@rajatg</span>
        </div>
      </div>
      {postModal && (
        <PostModal
          dispatch={dispatch}
          addPost={addPost}
          token={token}
          setPostModal={setPostModal}
        />
      )}
    </div>
  );
}

import style from "./leftNav.module.css";
import { AiFillHome, AiOutlineLogin } from "react-icons/ai";
import { FaHashtag, FaUserAlt } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, addPost } from "../../features/index";
import { PostModal } from "../index";

export function LeftNav({ postModal, setPostModal }) {
  const { token, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arr = [
    { component: "Home", icon: <AiFillHome /> },
    { component: "Explore", icon: <FaHashtag /> },
    { component: "Bookmarks", icon: <BsFillBookmarkFill /> },
    { component: "Profile", icon: <FaUserAlt /> },
  ];

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
        <Link to="/Home">
          <IoIosPeople className={style.logo} />
        </Link>

        {arr.map((item) => (
          <Link to={`/${item.component}`}>
            <p className={style.option}>
              {item.icon}
              <p>{item.component}</p>
            </p>
          </Link>
        ))}

        {token ? (
          <p onClick={logoutHandler} className={style.option}>
            <AiOutlineLogin />
            <p>Logout</p>
          </p>
        ) : (
          <p onClick={loginHandler} className={style.option}>
            <AiOutlineLogin />
            Login
          </p>
        )}

        <button
          className={`${style.postBtn} ${style.option}`}
          onClick={postHandler}
        >
          Post
        </button>
      </div>
      <Link to="/Profile" className={style.profile}>
        <img className="profilePic" src={user.avatarURL} alt="Profile-Pic" />
        <div>
          <span>
            {user.firstName} {user.lastName}
          </span>
          <br />
          <span className="lightText">@{user.username}</span>
        </div>
      </Link>
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

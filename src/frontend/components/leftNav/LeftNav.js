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
  ];

  const loginHandler = () => {
    navigate("/login");
  };
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const postHandler = () => {
    token ? setPostModal((prev) => !prev) : navigate("/login");
  };

  return (
    <div className={style.leftNav}>
      <div className={style.options}>
        <Link to="/page/home" className={style.componentName}>
          <IoIosPeople className={style.logo} />
        </Link>

        {arr.map((item) => (
          <Link
            to={`/page/${item.component.toLowerCase()}`}
            key={item.component}
          >
            <div className={style.option} title={item.component}>
              <p>{item.icon}</p>
              <p className={style.componentName}>{item.component}</p>
            </div>
          </Link>
        ))}
        <Link to={`/profile/${user?.username}`}>
          <div className={style.option} title="Profile">
            <p>
              <FaUserAlt />
            </p>
            <p className={style.componentName}>Profile</p>
          </div>
        </Link>

        {token ? (
          <div
            onClick={logoutHandler}
            className={`${style.option} ${style.componentName}`}
            title="Logout"
          >
            <p>
              <AiOutlineLogin />
            </p>
            <p>Logout</p>
          </div>
        ) : (
          <div onClick={loginHandler} className={style.option}>
            <AiOutlineLogin />
            Login
          </div>
        )}

        <button
          className={`${style.postBtn} ${style.option}`}
          onClick={postHandler}
        >
          Post
        </button>
      </div>
      <Link to={`/profile/${user?.username}`} className={style.profile}>
        <img className="profilePic" src={user?.avatarURL} alt="Profile-Pic" />
        <div className={style.componentName}>
          <span>
            {user?.firstName} {user?.lastName}
          </span>
          <br />
          <span className="lightText">@{user?.username}</span>
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

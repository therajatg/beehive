import style from "./rightNav.module.css";
import { followAnotherUser, getAllUsers, getUser } from "../../features/index";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../../helpers/index";

export function RightNav() {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((store) => store.user);
  const { token, user } = useSelector((store) => store.auth);
  const { bookmarks } = useSelector((store) => store.posts);
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const whoToFollow = allUsers?.filter(
    (person) =>
      !user?.following?.map((item) => item.username).includes(person.username)
  );

  const followHandler = (_id) => {
    dispatch(followAnotherUser({ followUserId: _id, token }));
  };

  return (
    <div className={style.rightNav}>
      <div className={style.search}>
        <div className={style.searchBar}>
          <FaSearch className={style.searchIcon} />
          <input
            type="search"
            placeholder="Search User"
            onChange={(e) => {
              setSearchResult(search(e.target.value, allUsers));
            }}
          />
        </div>
        <div className={style.searchedProfiles}>
          {searchResult &&
            searchResult.map(({ avatarURL, firstName, lastName, username }) => (
              <Link to={`/profile/${username}`} className={style.user}>
                <div className={style.avatarAndName}>
                  <img
                    src={avatarURL}
                    alt="profile-pic"
                    className="profilePic"
                  />
                  <div className={style.name}>
                    <p>
                      {firstName} {lastName}
                    </p>
                    <p className="lightText">@{username}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className={style.whoToFollow}>
        <p className={style.whoToFollowTitle}>Who to follow</p>
        {whoToFollow?.map(
          ({ _id, avatarURL, firstName, lastName, username }) => (
            <div className={style.user} key={_id}>
              <Link to={`/profile/${username}`} className={style.avatarAndName}>
                <img src={avatarURL} alt="profile-pic" className="profilePic" />
                <div className={style.name}>
                  <p>
                    {firstName} {lastName}
                  </p>
                  <p className="lightText">@{username}</p>
                </div>
              </Link>
              <button
                className={style.followBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  followHandler(_id);
                }}
              >
                Follow
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

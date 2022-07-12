import style from "./rightNav.module.css";
import { followAnotherUser, getAllUsers, getUser } from "../../features/index";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";

export function RightNav() {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((store) => store.user);
  const { token, user } = useSelector((store) => store.auth);
  const { bookmarks } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const whoToFollow =
    allUsers.length > 0
      ? allUsers.filter(
          (userDetail) =>
            ![
              ...allUsers
                .find((person) => person.username === user.username)
                ?.following.map((item) => item.username),
              user.username,
            ].includes(userDetail.username)
        )
      : null;

  const followHandler = (_id) => {
    dispatch(followAnotherUser({ followUserId: _id, token }));
  };

  return (
    <div className={style.rightNav}>
      <div className={style.search}>
        <FaSearch className={style.searchIcon} />
        <input type="search" placeholder="Search Beehive" name="" id="" />
      </div>
      <div className={style.whoToFollow}>
        <p className={style.whoToFollowTitle}>Who to follow</p>
        {whoToFollow?.map(
          ({ _id, avatarURL, firstName, lastName, username }) => (
            <div className={style.user}>
              <div className={style.avatarAndName}>
                <img src={avatarURL} alt="profile-pic" className="profilePic" />
                <div className={style.name}>
                  <p>
                    {firstName} {lastName}
                  </p>
                  <p className="lightText">@{username}</p>
                </div>
              </div>
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

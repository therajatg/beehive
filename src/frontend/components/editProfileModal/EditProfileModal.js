import style from "./editProfileModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

export function EditProfileModal({
  editUserDetail,
  dispatch,
  token,
  user,
  setEditProfileModal,
}) {
  const { firstName, lastName } = user;
  const [userData, setUserData] = useState({});

  const updateUserDetails = () => {
    dispatch(editUserDetail({ userData, token }));
    setUserData({ website: "", about: "" });
    setEditProfileModal(false);
  };

  return (
    <div className={style.modal}>
      <div className={style.top}>
        <h2>Update Profile</h2>
        <AiOutlineClose
          className={style.close}
          onClick={() => setEditProfileModal((prev) => !prev)}
        />
      </div>

      <div className={style.name}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} />
        </div>
      </div>

      <div>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          onChange={(e) =>
            setUserData({ ...userData, website: e.target.value })
          }
          value={userData.website}
        />
      </div>

      <div>
        <label htmlFor="about">About</label>
        <textarea
          type="text"
          id="about"
          className={style.about}
          onChange={(e) => setUserData({ ...userData, about: e.target.value })}
          value={userData.about}
        />
      </div>

      <button onClick={updateUserDetails}>Update</button>
    </div>
  );
}

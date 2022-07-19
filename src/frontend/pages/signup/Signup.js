import style from "./signup.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../features/index";

export function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  const signupHandler = (e) => {
    setUserDetail({
      ...userDetail,
      avatarURL:
        "https://res.cloudinary.com/therajatg/image/upload/v1656598066/social%20media/Naval_Ravikant_gd3c2m.webp",
    });
    e.preventDefault();
    dispatch(signup(userDetail));
    navigate("/page/home");
  };

  return (
    <div className={style.signupPage}>
      <form className={style.form} onSubmit={signupHandler}>
        <p>Welcome to beehive</p>
        <div className={style.name}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userDetail.firstName}
              required
              onChange={(e) =>
                setUserDetail({ ...userDetail, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userDetail.lastName}
              required
              onChange={(e) =>
                setUserDetail({ ...userDetail, lastName: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetail.email}
            required
            onChange={(e) =>
              setUserDetail({ ...userDetail, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userDetail.username}
            required
            onChange={(e) =>
              setUserDetail({ ...userDetail, username: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userDetail.password}
            required
            onChange={(e) =>
              setUserDetail({ ...userDetail, password: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>
        <div>
          <button className={style.signupBtn}>Create New Account</button>
        </div>

        <p className={style.loginLine}>
          Already a user?{" "}
          <Link to="/login" className={style.login}>
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}

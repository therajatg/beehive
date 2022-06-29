import style from "./signup.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../features/authSlice";

export function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({});

  const signupHandler = (e) => {
    console.log(userDetail);
    e.preventDefault();
    dispatch(signup(userDetail));
  };

  return (
    <div className={style.signupPage}>
      <form className={style.form} onSubmit={signupHandler}>
        <h2>Welcome to beehive</h2>
        <div className={style.name}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userDetail.firstName}
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
            onChange={(e) =>
              setUserDetail({ ...userDetail, password: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <button className={style.signupBtn}>Create New Account</button>
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

import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/index";

export function Login() {
  const [userDetail, setUserDetail] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(userDetail));
    navigate("/page/home");
  };

  return (
    <div className={style.loginPage}>
      <form className={style.form} onSubmit={loginHandler}>
        <p>Login to beehive</p>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
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
            onChange={(e) =>
              setUserDetail({ ...userDetail, password: e.target.value })
            }
          />
          <span>Forgot Password?</span>
        </div>
        <div>
          <button className={style.loginBtn}>LOGIN</button>
          <br />
          <button
            className={style.guestLoginBtn}
            onClick={() =>
              setUserDetail({
                username: "rajat",
                password: "rajat123",
              })
            }
          >
            Login As Guest
          </button>
        </div>
        <p className={style.signupLine}>
          New here?{" "}
          <Link to="/signup" className={style.signup}>
            Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}

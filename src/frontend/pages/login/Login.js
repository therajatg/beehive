import style from "./login.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/index";
import { useState } from "react";

export function Login() {
  const { authState, authDispatch } = useAuth();
  const { user } = authState;
  const [flag, setFlag] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  async function loginHandler(e) {
    console.log(e);
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", res.data.encodedToken);
      authDispatch({ type: "TOKEN", payload: res.data.encodedToken });
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  async function guestHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", {
        userName: "rajatgupta",
        password: "rajat123",
      });
      localStorage.setItem("token", res.data.encodedToken);
      authDispatch({ type: "TOKEN", payload: res.data.encodedToken });
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={style.loginPage}>
      <form
        className={style.form}
        onSubmit={flag ? loginHandler : guestHandler}
      >
        <h2>Login to beehive</h2>
        <div>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            onChange={(e) =>
              authDispatch({ type: "USER_NAME", payload: e.target.value })
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
              authDispatch({ type: "PASSWORD", payload: e.target.value })
            }
          />
          <span>Forgot Password?</span>
        </div>
        <div>
          <button className={style.loginBtn} onClick={() => setFlag(true)}>
            LOGIN
          </button>
          <br />
          <button
            className={style.guestLoginBtn}
            onClick={() => setFlag(false)}
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

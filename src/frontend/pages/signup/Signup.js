import style from "./signup.module.css";
import { useAuth } from "../../contexts/authContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export function Signup() {
  const { authState, authDispatch } = useAuth();
  const { user } = authState;
  const navigate = useNavigate();

  async function signupHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.userName,
        password: user.password,
      });
      localStorage.setItem("token", res.data.encodedToken);
      authDispatch({ type: "TOKEN", payload: res.data.encodedToken });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

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
              required
              onChange={(e) =>
                authDispatch({
                  type: "FIRST_NAME",
                  payload: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              onChange={(e) =>
                authDispatch({
                  type: "LAST_NAME",
                  payload: e.target.value,
                })
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
            required
            onChange={(e) =>
              authDispatch({
                type: "EMAIL",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) =>
              authDispatch({
                type: "USER_NAME",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) =>
              authDispatch({
                type: "PASSWORD",
                payload: e.target.value,
              })
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

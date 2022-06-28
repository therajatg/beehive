import style from "./signup.module.css";
import { useAuth } from "../../contexts/authContext";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";

export function Signup() {
  // const { authState, authDispatch } = useAuth();
  const dispatch = useDispatch();
  // const { user } = authState;
  // const navigate = useNavigate();

  async function signupHandler(e) {
    e.preventDefault();
    dispatch(login());
  }

  return (
    <div className={style.signupPage}>
      <form className={style.form} onSubmit={signupHandler}>
        <h2>Welcome to beehive</h2>
        <div className={style.name}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
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

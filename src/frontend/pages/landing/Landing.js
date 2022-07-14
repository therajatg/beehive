import { useNavigate } from "react-router-dom";
import style from "./landing.module.css";

export function Landing() {
  const navigate = useNavigate();
  return (
    <div className={style.main}>
      <div className={style.top}>
        <div className={style.nameAndTagline}>
          <p className={style.name}>Beehive</p>
          <span className={style.tagline}>
            Stay <span>Connected</span>{" "}
          </span>
        </div>

        <p className={`lightText ${style.description}`}>
          Express youself freely, Share what's on your mind, Connect with your
          friends, Follow like minded people and Explore the world with Beehive.
        </p>
        <div>
          <button
            className={style.getStarted}
            onClick={() => navigate("signup")}
          >
            Get Started
          </button>
          <button className={style.login} onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/therajatg/image/upload/v1657688238/social%20media/Online_world-pana_tiuapw.svg"
          alt=""
        />
      </div>
    </div>
  );
}

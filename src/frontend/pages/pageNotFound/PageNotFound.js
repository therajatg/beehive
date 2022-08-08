import style from "./pageNotFound.module.css";

export function PageNotFound() {
  return (
    <div className={style.main}>
      <img
        src="https://res.cloudinary.com/therajatg/image/upload/v1658410100/social%20media/404_fkrgao.svg"
        alt="404 Error: Page Not Found"
        className={style.img}
      />
    </div>
  );
}

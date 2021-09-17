import styles from "../../styles/MainHeader/MainHeader.module.css";
import icons from "../../assets/images/sprite.svg";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles["header__item"]}>
        <svg className={styles["header__icon"]}>
          <use xlinkHref={`${icons}#icon-bar-graph`}></use>
        </svg>
        <h3>Ranking</h3>
      </div>
      <div
        className={`${styles["header__item"]} ${styles["header__item--active"]}`}
      >
        <svg className={styles["header__icon"]}>
          <use xlinkHref={`${icons}#icon-sweden`}></use>
        </svg>
        <h3>Board</h3>
      </div>
      <div className={styles["header__item"]}>
        <svg className={styles["header__icon"]}>
          <use xlinkHref={`${icons}#icon-text-document`}></use>
        </svg>
        <h3>Feed</h3>
      </div>
      <div className={styles["header__item"]}>
        <svg className={styles["header__icon"]}>
          <use xlinkHref={`${icons}#icon-time-slot`}></use>
        </svg>
        <h3>Report</h3>
      </div>
    </header>
  );
};

export default Header;

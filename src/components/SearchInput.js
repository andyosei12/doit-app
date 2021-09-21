import icons from "../assets/images/sprite.svg";

import styles from "../styles/SearchInput/SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <form className={styles.search}>
      <input
        type="text"
        placeholder="Search Items"
        className={styles["search__input"]}
      />
      <button className={styles["search__btn"]}>
        <svg className={styles["search__icon"]}>
          <use xlinkHref={`${icons}#icon-magnifying-glass`}></use>
        </svg>
      </button>
    </form>
  );
};

export default SearchInput;

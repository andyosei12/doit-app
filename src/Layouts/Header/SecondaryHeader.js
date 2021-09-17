import Members from "../../components/Members/Members";
import styles from "../../styles/SecondaryHeader/SecondaryHeader.module.css";

const SecondaryHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles["header__title"]}>
        <h3 className={styles["header__title--main"]}>Development Team</h3>
        <h3 className={styles["header__title--sub"]}>
          Sprint <span>8</span>
        </h3>
      </div>
      <div>
        <Members />
      </div>
    </header>
  );
};

export default SecondaryHeader;

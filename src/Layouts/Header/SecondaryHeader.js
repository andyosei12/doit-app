import { useContext } from "react";
import Members from "../../components/Members/Members";
import TaskContext from "../../store/TaskContext";
import styles from "../../styles/SecondaryHeader/SecondaryHeader.module.css";

const SecondaryHeader = (props) => {
  const taskCtx = useContext(TaskContext);
  const totalTask = taskCtx.items.length;
  return (
    <header className={styles.header}>
      <div className={styles["header__title"]}>
        <h3 className={styles["header__title--main"]}>Development Team</h3>
        <h3 className={styles["header__title--sub"]}>
          Sprint <span>{totalTask}</span>
        </h3>
      </div>
      <div>
        <Members />
      </div>
    </header>
  );
};

export default SecondaryHeader;

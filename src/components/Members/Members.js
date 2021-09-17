import styles from "../../styles/Members/Members.module.css";

import user1 from "../../assets/images/user-2.jpg";
import user2 from "../../assets/images/user-3.jpg";
import user3 from "../../assets/images/user-4.jpg";
import user4 from "../../assets/images/user-5.jpg";

const Members = (props) => {
  return (
    <div className={styles.members}>
      <div className={styles["members__list"]}>
        <img src={user1} alt="user 1" className={styles["members__image"]} />
        <img src={user2} alt="user 2" className={styles["members__image"]} />
        <img src={user3} alt="user 3" className={styles["members__image"]} />
        <img src={user4} alt="user 4" className={styles["members__image"]} />
      </div>
      <div className={styles["members__list-add"]}>
        <h3>
          <span>+</span> New Member
        </h3>
      </div>
    </div>
  );
};

export default Members;

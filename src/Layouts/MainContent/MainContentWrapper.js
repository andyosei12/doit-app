import styles from "../../styles/MainContentWrapper/MainContentWrapper.module.css";

const MainContentWrapper = (props) => {
  return <main className={styles.main}>{props.children}</main>;
};

export default MainContentWrapper;

import styles from "../../../styles/PrimaryButton/PrimaryButton.module.css";

const PrimaryButton = (props) => {
  return (
    <button type="submit" onClick={props.onOpenModal} className={styles.button}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;

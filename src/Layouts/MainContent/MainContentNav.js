import SearchInput from "../../components/SearchInput";
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton";
import styles from "../../styles/MainContentNav/MainContentNav.module.css";

const MainContentNav = (props) => {
  return (
    <div className={styles["main-content__nav"]}>
      <SearchInput />
      <PrimaryButton onOpenModal={props.onOpenModal}>+ New Item</PrimaryButton>
    </div>
  );
};

export default MainContentNav;

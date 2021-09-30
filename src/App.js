import { useState } from "react";
import TaskContextProvider from "./store/TaskContextProvider";
import MainContent from "./Layouts/MainContent/MainContent";
import MainHeader from "./Layouts/Header/MainHeader";
import SecondaryHeader from "./Layouts/Header/SecondaryHeader";
import MainContentNav from "./Layouts/MainContent/MainContentNav";
import MainContentWrapper from "./Layouts/MainContent/MainContentWrapper";
import TaskForm from "./components/TaskForm";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <TaskContextProvider>
      {openModal && (
        <TaskForm onCloseModal={closeModalHandler}>I am open</TaskForm>
      )}
      <MainHeader />
      <SecondaryHeader />
      <MainContentWrapper>
        <MainContentNav onOpenModal={openModalHandler} />
        <MainContent />
      </MainContentWrapper>
    </TaskContextProvider>
  );
}

export default App;

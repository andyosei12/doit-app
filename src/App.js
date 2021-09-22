import { Fragment } from "react";
import MainContent from "./Layouts/MainContent/MainContent";
import MainHeader from "./Layouts/Header/MainHeader";
import SecondaryHeader from "./Layouts/Header/SecondaryHeader";
import MainContentNav from "./Layouts/MainContent/MainContentNav";
import MainContentWrapper from "./Layouts/MainContent/MainContentWrapper";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <SecondaryHeader />
      <MainContentWrapper>
        <MainContentNav />
        <MainContent />
      </MainContentWrapper>
    </Fragment>
  );
}

export default App;

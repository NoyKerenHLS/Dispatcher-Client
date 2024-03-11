import MainPage from "./components/mainPage/MainPage";
import NavBar from "./components/navBar/NavBar";
import { handleSearch } from "./utils/MockUpData";

function App() {
  return (
    <>
      <NavBar dropDownLabel={"Top Headlines"} handleSearch={handleSearch} />
      <MainPage />
    </>
  );
}

export default App;

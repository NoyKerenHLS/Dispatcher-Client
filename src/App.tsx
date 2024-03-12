import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import NavBar from "./components/navBar/NavBar";
import { handleSearch } from "./utils/MockUpData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NavBar dropDownLabel={"Top Headlines"} handleSearch={handleSearch} />
        <MainPage />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainPage from "./components/pages/MainPage";
import NavBar from "./components/navBar/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <MainPage />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

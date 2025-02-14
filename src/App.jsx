import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

//Default layout
import DefaultLayout from "./layouts/DefaultLayout";
//Pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TravelDetailPage from "./pages/TravelDetailPage";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route Component={DefaultLayout}>
            <Route path="/home" Component={HomePage} />
            <Route path="/travel-detail/:id" Component={TravelDetailPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )

}

export default App

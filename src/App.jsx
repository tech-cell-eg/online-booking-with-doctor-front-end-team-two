import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Doctors from "./pages/Doctors";
import Favorites from "./pages/Favorites";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />} >
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/favorites" element={<Favorites />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

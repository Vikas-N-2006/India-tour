import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cuisine from "./pages/cuisines.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Cuisine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from './pages/Explore';
import Cuisines from "./pages/cuisines";
import North from "./pages/cuisine division/North";
import South from "./pages/cuisine division/South";
import East from "./pages/cuisine division/East";
import West from "./pages/cuisine division/West";
import Heritage from "./pages/heritage/Heritage";
import Ajantacaves from "./pages/heritage/Ajantacaves"
import Bhimbetka from "./pages/heritage/Bhimbetka"
import Chhatrapati from "./pages/heritage/Chhatrapati"
import Taj from "./pages/heritage/Taj"
import Mahabodhi from "./pages/heritage/Mahabodhi"
import Spiritual from "./pages/spiritual/Spiritual";
import Varanasi from "./pages/spiritual/Varanasi";
import Goldentemple from "./pages/spiritual/Goldentemple";
import Meenakshi from "./pages/spiritual/Meenakshi";
import Rammandir from "./pages/spiritual/Rammandir";
import Rishikesh from "./pages/spiritual/Rishikesh";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/cuisines" element={<Cuisines/>}/>
      <Route path="/cuisine/north" element={<North/>}/>
      <Route path="/cuisine/south" element={<South/>}/>
      <Route path="/cuisine/east" element={<East/>}/>
      <Route path="/cuisine/west" element={<West/>}/>
      <Route path="/explore/heritage" element={<Heritage/>}/>
      <Route path="/explore/heritage/ajanta" element={<Ajantacaves/>}/>
      <Route path="/explore/heritage/bhimbetkar" element={<Bhimbetka/>}/>
      <Route path="/explore/heritage/chatrapati" element={<Chhatrapati/>}/>
      <Route path="/explore/heritage/tajmahal" element={<Taj/>}/>
      <Route path="/explore/heritage/mahabodhi" element={<Mahabodhi/>}/>
      <Route path="/explore/spiritual" element={<Spiritual/>}/>
      <Route path="/explore/spiritual/goldentemple" element={<Goldentemple/>}/>
      <Route path="/explore/spiritual/rammandir" element={<Rammandir/>}/>
      <Route path="/explore/spiritual/meenakshi" element={<Meenakshi/>}/>
      <Route path="/explore/spiritual/varanasi" element={<Varanasi/>}/>
      <Route path="/explore/spiritual/rishikesh" element={<Rishikesh/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

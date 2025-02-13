import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Accomodation from "./pages/Accomodation";
import Polls from "./pages/Polls";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/polls" element={<Polls />} />
      </Routes>
      <NavBar />
    </div>
  )
}
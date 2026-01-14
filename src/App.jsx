import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Reservation from "./pages/Reservations";
import Help from "./pages/Help";
import Destinations from "./pages/Destinations";
import HostPage from "./pages/HostPage";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import UserInteraction from "./pages/UserInteraction";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/help" element={<Help />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/host" element={<HostPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/interactions" element={<UserInteraction />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
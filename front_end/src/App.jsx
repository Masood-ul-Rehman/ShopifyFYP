import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ResetPassword from "./pages/ResetPassword";
import CreateWebsite from "./pages/CreateWebsite";
import "./index.css";

function App() {

  return (
    <div>
      <Router>
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/create" element={<CreateWebsite />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </div>

    // <Loader />
  );
}

export default App;
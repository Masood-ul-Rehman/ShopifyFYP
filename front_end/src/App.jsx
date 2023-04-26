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
import Layout from "./components/logedinuser/Layout";
import Dashboradd from './pages/dashboard/Dashboradd';
import "./index.css";

// react redux 
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Router>
        <div className="main-content">
          {
            !user ? <Header /> : 
            <Routes>
                <Route path="/dashboard" element={<Layout />}>
                    <Route index element={<Dashboradd />} />
                    {/* <Route path="products" element={<Products />} /> */}
                </Route>
            </Routes> 
          }
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/create" element={<CreateWebsite />} />
          </Routes>
          {
            user ? <Footer /> : null
          }
        </div>
      </Router>
      <ToastContainer />
    </div>

    // <Loader />
  );
}

export default App;
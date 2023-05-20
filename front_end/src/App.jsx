import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Createnewstore from "./pages/Createnewstore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ResetPassword from "./pages/ResetPassword";
import CreateWebsite from "./pages/CreateWebsite";
import Layout from "./components/logedinuser/Layout";
import Dashboradd from "./pages/dashboard/Dashboradd";
import Products from "./pages/dashboard/products/Products";
import AddProduct from "./pages/dashboard/products/AddProduct";
import OrderPage from "./pages/dashboard/order/OrderPage";
import Updateprod from "./pages/dashboard/products/UpdateProd";
import "./index.css";

// react redux
import { useSelector } from "react-redux";


function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Router>
        <div className="main-content">
          {!user && <Header />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {user && (
            <Routes>
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/createstore" element={<Createnewstore />} />
              <Route path="/create" element={<CreateWebsite />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboradd />} />
                <Route path="products" element={<Products />} />
                <Route path="addproducts" element={<AddProduct />} />
                <Route path="updateproduct" element={<Updateprod />} />
                <Route path="orders" element={<OrderPage />} />
              </Route>
            </Routes>
          )}
          {!user && <Home />}

          {!user && <Footer />}
        </div>
      </Router>
      <ToastContainer />
    </div>

    // <Loader />
  );
}

export default App;

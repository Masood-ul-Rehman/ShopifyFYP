import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";
import { useEffect, useState } from "react";
// react redux
import { useSelector } from "react-redux";
import Stores from "./pages/store/stores";
import CreateNewStore from "./pages/store/createNewStore";
import Dashborad from "./pages/dashboard/Dashborad";
import Layout from "./components/logedinuser/Layout";
import Products from "./pages/dashboard/products/Products";
import AddProduct from "./pages/dashboard/products/AddProduct";
import Updateprod from "./pages/dashboard/products/UpdateProd";
import OrderPage from "./pages/dashboard/order/OrderPage";

function App() {
  const { user } = useSelector((state) => state.auth);
  const [refetchStores, setRefetch] = useState(false);
  const store = localStorage.getItem("store");

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
              <Route
                path="/"
                element={<Stores refetchState={refetchStores} />}
              />
              <Route
                path="/create"
                element={<CreateNewStore refetch={setRefetch} />}
              />
              <Route path="/dashboard/:id" element={<Layout />}>
                <Route index element={<Dashborad />} />
                <Route path="products" element={<Products />} />
                <Route path="addproducts" element={<AddProduct />} />
                <Route path="updateproduct" element={<Updateprod />} />
                <Route path="orders" element={<OrderPage />} />
              </Route>
              {/* <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/createstore" element={<Createnewstore />} />
             
             > */}
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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";
import useState from "react";
// react redux
import { useSelector } from "react-redux";
import Stores from "./pages/store/stores";
import CreateNewStore from "./pages/store/createNewStore";

function App() {
  const { user } = useSelector((state) => state.auth);
  const [refetchStores, setRefetch] = useState(false);
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
              {/* <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/createstore" element={<Createnewstore />} />
             
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboradd />} />
                <Route path="products" element={<Products />} />
                <Route path="addproducts" element={<AddProduct />} />
                <Route path="updateproduct" element={<Updateprod />} />
                <Route path="orders" element={<OrderPage />} />
              </Route> */}
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

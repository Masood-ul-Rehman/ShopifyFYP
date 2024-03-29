import React from "react";
import {
  Footer,
  Header,
  PrivateRoute,
  CustomSnackbar,
  Redirect,
} from "./Components";
import {
  Account,
  Cart,
  Checkout,
  Home,
  Login,
  Products,
  SignUp,
  SingleProductPage,
  Shipping,
  Error,
} from "./Pages";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const { url } = useSelector((state) => state.cart);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./storeData.json");
        setJsonData(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  console.log(jsonData);
  if (!jsonData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <CustomSnackbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Header />
              <Account />
              <Footer />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
              <Footer />
            </>
          }
        />
        {url === "" ? (
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
        ) : (
          <Route path="/checkout" element={<Redirect url={url} />} />
        )}

        <Route
          path="/products/:id"
          element={
            <>
              <Header />
              <SingleProductPage />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <Error />
            </>
          }
        />
        <Route
          path="/shipping"
          element={
            <>
              <Header />
              <Shipping />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;

import { useEffect } from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { Link, useNavigate, Routes, Route, Router } from "react-router-dom";
import HeaderLoged from "../components/logedinuser/HeaderLoged";
import Layout from "../components/logedinuser/Layout";
import Dashboardd from "./dashboard/Dashboradd";
=======
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "/api/complete/install/";
>>>>>>> 3bf0db2d111ec92457730568f8817f3eb4abad01

const Dashboard = () => {
  // const respas = async (userData) => {
  //   const response = await axios.post(
  //     `http://localhost:5000/api/complete/install/${userData}`
  //   );

  //   console.log(response.data);
  //   console.log("ended");
  // };
  // const ClickHandler = () => {
  //   console.log("started");
  //   respas("1052aff2-ce68-483c-bd92-766f2b31613f");
  // };
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
<<<<<<< HEAD
  // useEffect(() => {
  //   if (!user) navigate("/login");
  // }, [user, navigate]);
  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      {/* <Link to={"/create"}>
=======

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  return (
    <div>
      <h1>Dashboard</h1>
      {/* <button onClick={ClickHandler}>Click</button> */}
      <Link to={"/create"}>
>>>>>>> 3bf0db2d111ec92457730568f8817f3eb4abad01
        <button>Create a website</button>
      </Link> */}
    </div>
  );
};
export default Dashboard;

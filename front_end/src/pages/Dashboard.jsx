import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, Routes, Route, Router } from "react-router-dom";
import HeaderLoged from "../components/logedinuser/HeaderLoged";
import Layout from "../components/logedinuser/Layout";
import Dashboardd from "./dashboard/Dashboradd";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  return (
    <div>
      <h1>Dashboard</h1>
      {/* <button onClick={ClickHandler}>Click</button> */}
      <Link to={"/create"}>
        <button>Create a website</button>
      </Link>
    </div>
  );
};
export default Dashboard;

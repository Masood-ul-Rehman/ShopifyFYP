import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HeaderLoged from "../components/logedinuser/HeaderLoged";
import Layout from "../components/logedinuser/Layout";
import Dashboardd from "./dashboard/Dashboradd";
import Button from "../components/Button";
import { toast } from "react-toastify";

const Createnewstore = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div className="flex justify-center items-center flex-col h-[100vh]">
      <h1 className="text-4xl text-center font-poppins text font-semibold mb-8">
        Welcome to the Shopipy with addons
      </h1>
      <Link to={"/create"}>
        <Button primaryGrad>Create a store</Button>
      </Link>

      <p className="font-poppins text-base font-light text-neutral-800 mt-2">
        Already have a store?
        <Link to={"/dashboard"}>
          <span className="text-purplish hover:text-opacity-80">
            Go to dashbaord
          </span>
        </Link>{" "}
      </p>
    </div>
  );
};
export default Createnewstore;

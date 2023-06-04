import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button";

const NoStore = () => {
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
    </div>
  );
};
export default NoStore;

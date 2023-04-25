import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "/api/complete/install/";

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

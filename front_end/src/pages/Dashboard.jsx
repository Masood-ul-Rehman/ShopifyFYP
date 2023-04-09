import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={"/create"}>
        <button>Create a website</button>
      </Link>
    </div>
  );
};
export default Dashboard;

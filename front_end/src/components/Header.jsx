import { MdToc } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { logout, reset } from "../store";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import { useState } from "react";
import { toast } from "react-toastify";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const handleErrorClick = () =>{
    if(!user){
      toast.warning("You must login to access this page");
    }
  }

  // states for the nav open
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="header px-4 md:px-6 w-full grad">
      <div className="w-100 max-w-7xl flex items-center justify-between mx-auto py-2">
        <div className="logo">
          <NavLink to="/">
            <h1 className="text-white text-4xl font-manrope cursor-pointer">
              MWW
            </h1>
          </NavLink>
        </div>

        <div className="navbar">
          <ul
            className={
              !openNav
                ? "hidden md:flex md:items-center md:relative md:py-0"
                : "w-full md:w-auto flex flex-col md:flex-row absolute left-0 top-12 md:relative md:top-0 py-6 md:py-0 h-full items-center grad"
            }
          >
            {user ? (
              <li>
                <button className="btn" onClick={onLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="px-6 py-2 cursor-pointer font-poppins font-light text-base text-white">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="px-6 py-2 cursor-pointer  font-poppins font-light text-base text-white" onClick={handleErrorClick} >
                  <NavLink to={!user ? "/dashboard" : "/login"}>Dashboard</NavLink>
                </li>
                <li className="px-6 py-2 cursor-pointer font-poppins font-light text-base">
                  <NavLink to="/login">
                    <Button secondaryPlain>Login</Button>
                  </NavLink>
                </li>
                <li className="px-6 py-2 cursor-pointer font-poppins font-light text-base">
                  <NavLink to="/register">
                    <Button primaryPlain>Register</Button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="mobile flex md:hidden items-center justify-end">
            {!openNav ? (
              <MdToc
                size={40}
                color="white"
                onClick={() => setOpenNav(!openNav)}
              />
            ) : (
              <FaTimes
                size={40}
                color="white"
                onClick={() => setOpenNav(!openNav)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../store/index";
import Loader from "../components/Loader/Loader";
import Button from "../components/Button";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  const [checkboxValue, setCheckboxValue] = useState(false);
  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };

  if (isLoading) {
    return (
      <Loader />
      // <h1>loading...</h1>
    );
  }

  return (
    <>
      {/* <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p className="font-poppins text-3xl">Login and start setting goals</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section> */}

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-12 sm:mx-auto w-full sm:max-w-xl">
          <div className="bg-white pt-12 pb-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h3 className="text-center font-poppins text-neutral-800 text-4xl">
              Login
            </h3>
          </div>
          <form
            onSubmit={onSubmit}
            noValidate
            className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="example123@gmail.com"
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>
            <div className="mt-8">
              <label
                htmlFor="password"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-yellow transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>

            <div className="mt-6 mx-4 flex items-center justify-between">
              <div className="">
                <label className="relative flex items-center mt-2">
                  <div className="checkbox flex items-center h-5">
                    <input
                      type="checkbox"
                      checked={checkboxValue}
                      onChange={handleCheckboxChange}
                      className="form-checkbox border-neutral-800 h-4 w-4 text-neutral-800 transition duration-150 ease-in-out cursor-pointer checked:bg-pruplish"
                    />
                    <label></label>
                  </div>

                  <div className="ml-2 text-base -mt-[2px]">
                    <span>Remember me</span>
                  </div>
                </label>
              </div>

              <div className="text-base leading-5">
                <Link
                  to="/resetpassword"
                  className="font-poppins font-medium text-purplish focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forget Password?
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <Button styles={"m-auto px-12"} primaryGrad type={"submit"}>
                Login
              </Button>
            </div>

            
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

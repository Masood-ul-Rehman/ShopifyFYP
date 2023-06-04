import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { reset } from "../store/index";
import { register } from "../store/thunks/authThunk";
import Loader from "../components/Loader/Loader";
import Button from "../components/Button";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
      navigate("/");
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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
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
              Register
            </h3>
          </div>
          <form
            onSubmit={onSubmit}
            noValidate
            className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
              >
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>
            <div className="mt-8">
              <label
                htmlFor="email"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
              >
                Email
              </label>
              <input
                type="eamil"
                id="email"
                name="email"
                value={email}
                placeholder="example@gmail.com"
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
                placeholder="Enter stron password"
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor="password2"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>

            <div className="mt-12">
              <Button styles={"m-auto px-12"} primaryGrad type={"submit"}>
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

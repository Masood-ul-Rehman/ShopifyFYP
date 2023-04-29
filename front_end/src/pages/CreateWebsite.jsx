import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NewWebsiteThunk } from "../store/index";
import { toast } from "react-toastify";
import Button from "../components/Button";

const CreateWebsite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // check if the user is logged in
  useEffect(() => {
    if (!user) navigate("/login");
    toast.warning("You must login to access this page");
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    bustype: "",
  });
  const { name, bustype } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      bustype,
    };

    dispatch(NewWebsiteThunk(userData));
  };
  return (
    // <form onSubmit={onSubmit}>
    // <input
    //   type="name"
    //   className="form-control"
    //   id="name"
    //   name="name"
    //   value={name}
    //   placeholder="Enter your bussiness name"
    //   onChange={onChange}
    // />
    //   <input
    //     type="name"
    //     className="form-control"
    //     id="bustype"
    //     name="bustype"
    //     value={bustype}
    //     placeholder="Enter your Bussiness type"
    //     onChange={onChange}
    //   />
    //   <button type="submit">Continue</button>
    // </form>

    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-12 sm:mx-auto w-full sm:max-w-xl">
        <div className="bg-white pt-12 pb-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h3 className="text-center font-poppins text-neutral-800 text-4xl">
            Create Store
          </h3>
        </div>
        <form
          onSubmit={onSubmit}
          noValidate
          className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <div>
            <label
              htmlFor="storename"
              className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
            >
              Store name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              value={name}
              placeholder="Wonderful Furniture"
              onChange={onChange}
              className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="bustype"
              className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
            >
              Bussiness type
            </label>
            <input
              type="name"
              id="bustype"
              name="bustype"
              value={bustype}
              placeholder="e.g: Furniture selling"
              onChange={onChange}
              className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            />
          </div>

          <div className="mt-12">
            <Button styles={"m-auto px-12"} primaryGrad type={"submit"}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateWebsite;

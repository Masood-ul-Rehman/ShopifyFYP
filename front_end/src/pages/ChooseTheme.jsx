import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { NewWebsiteThunk } from "../store/index";
// import { toast } from "react-toastify";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChooseThemeThunk } from "../store/index";

function ChooseTheme() {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { isSuccess, data, isError, isMessage } = useSelector(
      (state) => state.createdStore
    );
  
    const [formData, setFormData] = useState({
      theme: "flonee",
    });
    const { theme } = formData;
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      const userData = {
        User: user,
        theme: theme,
      };

      dispatch(ChooseThemeThunk(userData));
  
      if (isSuccess) {
        toast.success("Successfully created store !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (isError === true) {
        toast.error("error occured:", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    };



  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-12 sm:mx-auto w-full sm:max-w-xl">
          <div className="bg-white pt-12 pb-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h3 className="text-center font-poppins text-neutral-800 text-4xl">
              Choose Theme
            </h3>
          </div>
          <form
            onSubmit={onSubmit}
            noValidate
            className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <div className="mt-8">
              <label
                htmlFor="bustype"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
              >
                Select theme
              </label>
              <select
                id="theme"
                name="theme"
                value={theme}
                className="form-control form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full placeholder:text-sm placeholder:text-neutral-500  shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full "
                onChange={onChange}
              >
                <option value="flonee">Select an Option</option>
                <option value="flonee">Flone</option>
                <option value="minimalistic">Minimalistic</option>
              </select>
            </div>

            <div className="mt-12">
              <Button styles={"m-auto px-12"} primaryGrad type={"submit"}>
                Continue
              </Button>
            </div>
          </form>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
}

export default ChooseTheme;

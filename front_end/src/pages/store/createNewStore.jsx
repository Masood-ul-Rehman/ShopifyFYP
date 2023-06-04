import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import { storeDetails } from "../../api/stores";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CreateNewStore = ({ refetch }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    bustype: "",
    theme: "",
  });

  const { name, bustype, theme } = formData;
  const {
    data,
    isLoading,
    isSuccess,
    mutate: CreateStore,
  } = useMutation((data) => {
    return storeDetails(data);
  });
  console.log(data);
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
      name: name,
      type: bustype,
      theme: theme,
    };
    CreateStore(userData);
    refetch(true);
    data?.data !== "" ? navigate("/") : <></>;
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-12 sm:mx-auto w-full sm:max-w-xl">
          <div className="bg-white pt-12 pb-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h3 className="text-center font-poppins text-neutral-800 text-4xl">
              Create Store
            </h3>
          </div>

          {isLoading ? (
            <h1>Loading</h1>
          ) : (
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
                  className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full placeholder:text-sm placeholder:text-neutral-500 shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
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
                  className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full placeholder:text-sm placeholder:text-neutral-500  shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                />
              </div>
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
          )}
        </div>
      </div>
    </div>
  );
};
export default CreateNewStore;

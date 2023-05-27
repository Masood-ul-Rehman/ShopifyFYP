import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { NewWebsiteThunk } from "../store/index";
import { createStoreThunk } from "../store/index";
// import { toast } from "react-toastify";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateWebsite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isSuccess, data, isError, isMessage } = useSelector(
    (state) => state.createdStore
  );


  // check if the user is logged in
  // useEffect(() => {
  //   if (!user) navigate("/login");
  //   toast.warning("Incorrect Details");
  // }, [user, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    bustype: "",
    theme: "",
  });
  const { name, bustype, theme } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(()=>{
    if(isSuccess){
      navigate("/selectionTheme");
    }
  }, [isSuccess])
  // this will be connected with redux later
  // const [selectedImage, setSelectedImage] = useState(null);
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedImage(URL.createObjectURL(file));
  // };

  const onSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      User: user,
      name: name,
      type: bustype,
    };

    try {
      await dispatch(createStoreThunk(userData));
  
      if (isSuccess) {
        toast.success("Successfully created store!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      if (isError){
        toast.error("error occured", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log("error occured")
    }


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
          {/* <div className="mt-8">
            <label
              htmlFor="bustype"
              className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800"
            >
              Select theme
            </label>
            <select id="theme" name="theme" value={theme} className="form-control form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-full placeholder:text-sm placeholder:text-neutral-500  shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full " onChange={onChange} >
              <option value="select">Select an Option</option>
              <option value="flonee">Flone</option>
              <option value="minimalistic">Minimalistic</option>
        </select>
          </div>

          <div className="mt-16 relative">
            <label className="flex flex-col items-center w-full px-4 py-6 rounded-full border border-neutral-800 shadow-md tracking-wide cursor-pointer hover:bg-gray-100 focus:shadow-oline-purplish focus:border-purplish transition duration-150 ease-in-out">
              <span className="text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-4 text-neutral-800 absolute left-0 -top-[36px]">
                Choose logo
              </span>
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="uploaded-img"
                  className="w-8 h-8"
                />
              ) : (
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.886 14.139c-1.553-.92-2.03-2.735-1.11-4.287l6.166-10.396c.92-1.553 2.735-2.03 4.287-1.11l3.307 1.96c1.553.92 2.03 2.735 1.11 4.287L13.76 13.67c-.92 1.553-2.735 2.03-4.287 1.11l-3.307-1.96z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M10.597 6.768c-.92-1.553-.343-3.368 1.21-4.288l3.307-1.96c1.553-.92 3.368-.343 4.287 1.11l6.166 10.396c.92 1.553.343 3.368-1.21 4.287l-3.307 1.96c-1.553.92-3.368.343-4.287-1.11l-6.166-10.396z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
              <span className="mt-2 text-sm font-poppins leading-normal text-neutral-500">
                Select a file
              </span>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div> */}

          <div className="mt-12">
            <Button styles={"m-auto px-12"} primaryGrad type={"submit"}>
              Continue
            </Button>
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};
export default CreateWebsite;

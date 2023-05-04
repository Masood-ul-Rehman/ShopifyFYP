import React, { useState } from "react";
import {Link} from "react-router-dom";
import Button from "../../../components/Button";

function AddProduct() {
  const [formData, setFormData] = useState({
    id: "abcdef123qwe",
    title: "",
    shortDesc: "",
    details: "",
    price: 0,
    quantity: 0,
    discount: 0
  });
  const { id ,title, shortDesc, details, price, quantity, discount } = formData;

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // creates a URL for the selected file object
    // represents the file contents as a binary string

    setSelectedImage(URL.createObjectURL(file));
  };



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(selectedImage)
  };

  return (
    <div className="py-4">
      <div className="row">
        <div className="flex justify-between items-center py-4">
          <h1 className="font-poppins font-medium text-6xl">Add Product</h1>
          <Link to="/dashboard">
          <Button semiRounded simpleBlack>
            Back to dashboard
          </Button>
          </Link>
        </div>
        <hr />
      </div>

      <div className="add-products mt-6 w-[95%] lg:w-[90%] pt-4 pb-12">
        <form onSubmit={handleSubmit}
          noValidate>

<div className="flex w-full">
            <div className="w-1/2">
              <label
                htmlFor="id"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
              >
                Product Id
              </label>
              <input
                disabled
                type="text"
                id="id"
                name="id"
                value={id}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>

            <div className="w-1/2 ml-6">
              <label
                htmlFor="title"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
              >
                Product title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                placeholder="Iphone x-max pro"
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>
          </div>
          <div className="flex w-full mt-6">
            

            <div className="w-1/2">
              <label
                htmlFor="short-desc"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
              >
                Short description
              </label>
              <input
                type="text"
                id="shortDesc"
                name="shortDesc"
                value={shortDesc}
                placeholder="Reliable & gives you the best performance"
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>

            <div className="w-1/2 ml-6">
              <label
                htmlFor="stock"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
              >
                Stock
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full appearance-none"
              />
            </div>
          </div>

          <div className="flex w-full mt-6">
            <div className="w-1/2">
              <label
                htmlFor="title"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
              >
                Product Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={onChange}
                className="no-button-increment form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full appearance-none"
              />
            </div>

            <div className="w-1/2 ml-6">
              <label
                htmlFor="discount"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
              >
                Discount %age
              </label>
              <input
                type="number"
                id="discount"
                name="discount"
                value={discount}
                onChange={onChange}
                className="no-button-increment form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full appearance-none"
              />
            </div>
          </div>

          <div className="mt-16 relative">

            <label className="flex flex-col items-center w-full px-4 py-6 rounded-md bg-white border border-neutral-800 shadow-md tracking-wide cursor-pointer focus:shadow-oline-neutral-800 transition duration-150 ease-in-out">
              <span className="text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800 absolute left-0 -top-[36px]">Product image</span>
              {
                selectedImage ? <img src={selectedImage} alt="imgprod" className="w-8 h-8"  /> : 
                (
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
                )
              }
              <span className="mt-2 text-sm font-poppins leading-normal text-neutral-500">
                upload image
              </span>
              
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="mt-6">
            <label
              htmlFor="details"
              className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
            >
              Full Description
            </label>
            <textarea
              id="details"
              name="details"
              value={details}
              onChange={onChange}
              placeholder="Products details..."
              className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              rows="4"
            >
              Enter product details here...
            </textarea>
          </div>

          <Button type="submit" semiRounded simpleBlack styles="mt-10">Add now</Button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

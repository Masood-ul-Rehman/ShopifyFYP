import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { AddProductThnuk } from "../../../store";
function AddProduct() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    shortdesc: "",
    slug: "",
    price: 0,
    quantity: 0,
    color: "",
    image: null,
  });
  const { title, description, shortdesc, price, quantity, color } = formData;

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((state) => ({
      ...state,
      image: selectedImage,
    }));
    console.log(formData);
    dispatch(AddProductThnuk(formData));
  };

  return (
    <div className="py-4">
      <div className="row">
        <div className="flex justify-between items-center py-4">
          <h1 className="font-poppins font-medium text-6xl">Add Product</h1>
          <Link to="/">
            <Button semiRounded simpleBlack>
              Back to dashboard
            </Button>
          </Link>
        </div>
        <hr />
      </div>

      <div className="add-products mt-6 w-[95%] lg:w-[90%] pt-4 pb-12">
        <form noValidate onSubmit={handleSubmit}>
          <div className="flex w-full">
            <div className="w-1/2 ">
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

            <div className="w-1/2 ml-6">
              <label
                htmlFor="id"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
              >
                Color
              </label>
              <input
                required
                type="text"
                id="color"
                name="color"
                value={color}
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              />
            </div>
          </div>
          <div className="flex w-full mt-6">
            <div className="w-1/2 ">
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
                htmlFor="stock"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
              >
                Product Stock
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
            <div className="w-full">
              <label
                htmlFor="stock"
                className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
              >
                Short Description
              </label>
              <input
                type="text"
                id="shortdesc"
                name="shortdesc"
                value={shortdesc}
                onChange={onChange}
                className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full appearance-none"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="details"
              className="block text-base md:text-lg font-medium font-poppins leading-5 mb-2 ml-[2px] text-neutral-800"
            >
              Full Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={onChange}
              placeholder="Products details..."
              className="form-input font-poppins text-neutral-800 text-base md:text-lg block py-3 px-4 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:shadow-oline-purplish focus:border-neutral-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
              rows="4"
            >
              Enter product details here...
            </textarea>
          </div>
          <div className="mt-16 relative">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <Button type="submit" semiRounded simpleBlack styles="mt-10">
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

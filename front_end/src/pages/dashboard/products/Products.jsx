import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carditem from "./Carditem";
import Button from "../../../components/Button";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api/product";
import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../../../api/product";
function Products() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  const deletePost = useMutation((id) => {
    return deleteProduct(id);
  });
  const handelDelete = (id) => {
    deletePost.mutate(id);
    refetch("getProducts");
  };
  console.log(data);
  return (
    <div>
      <div className="py-4">
        <div className="row">
          <div className="flex justify-between items-center py-4">
            <h1 className="font-poppins font-medium text-6xl">Products</h1>
            <Link to="/addproducts">
              <Button semiRounded simpleBlack>
                Add New Product
              </Button>
            </Link>
          </div>
          <hr />
        </div>
      </div>
      {!data?.data[0] && !isLoading ? (
        <h1 className="font-poppins font-medium text-3xl">
          Add products to show here
        </h1>
      ) : (
        <></>
      )}
      <div>
        <div className="mt-6">
          {isLoading ? (
            <h1 className="font-poppins font-medium text-3xl">Loading....</h1>
          ) : (
            data?.data.map((detail) => {
              return (
                <>
                  {" "}
                  <div className="flex flex-row px-4 py-2 mb-4 shadow-[0_0_10px_rgba(0,0,0,0.10)] rounded-lg items-center justify-between">
                    <div className="flex items-center">
                      <div className="img w-40 h-auto rounded">
                        <img
                          src={`http://localhost:5000/uploads/${detail.image.data}`}
                          alt="prod"
                        />
                      </div>
                      <div className="product-details flex flex-col ml-8">
                        <h3 className="font-poppins text-xl text-neutral-800">
                          {detail.title}
                        </h3>
                        <h6 className="font-poppins text-base text-neutral-800">
                          ${detail.price}
                        </h6>
                        <p className="font-poppins font-medium text-base text-neutral-800 pt-4">
                          availability:{" "}
                          <span className="font-light">
                            {detail.quantity > 0
                              ? detail.quantity
                              : "not available"}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="btns flex">
                      <Link to="/updateproduct">
                        <Button semiRounded encourage>
                          Update
                        </Button>
                      </Link>
                      <Button
                        semiRounded
                        danger
                        styles="ml-6"
                        onClick={() => {
                          handelDelete(detail._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;

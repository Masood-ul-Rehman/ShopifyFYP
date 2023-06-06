import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api/product";
import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../../../api/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

function Products() {
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const deletePost = useMutation((id) => {
    return deleteProduct(id);
  });
  const handelDelete = (id) => {
    deletePost.mutate(id);
    refetch("getProducts");
    if (isError) {
      toast.error("Error deleting:", error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (isSuccess) {
      toast.success("Deleted succefully:", error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <div className="py-4">
        <div className="row">
          <div className="flex justify-between items-center py-4">
            <h1 className="font-poppins font-medium text-6xl">Products</h1>
            <div
              onClick={() => {
                navigate(`/dashboard/${id}/addproducts`);
              }}
            >
              <Button semiRounded simpleBlack>
                Add New Product
              </Button>
            </div>
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
                <div
                  key={detail._id}
                  className="flex flex-row px-4 py-2 mb-4 shadow-[0_0_10px_rgba(0,0,0,0.10)] rounded-lg items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="img w-40 h-auto rounded">
                      <img
                        src={`http://localhost:5000/images/${detail.image.data}`}
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
                    <div
                      onClick={() => {
                        navigate(`/dashboard/${id}/updateproduct`, {
                          state: detail,
                        });
                      }}
                    >
                      {" "}
                      <Button semiRounded encourage>
                        Update
                      </Button>
                    </div>
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
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;

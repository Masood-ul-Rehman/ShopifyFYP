import React from "react";
import { Link } from "react-router-dom";
import Carditem from "./Carditem";
import DATA from "./Data";
import Button from "../../../components/Button";

function Products() {
  return (
    <div>
      <div className="py-4">
        <div className="row">
          <div className="flex justify-between items-center py-4">
            <h1 className="font-poppins font-medium text-6xl">Products</h1>
            <Link to="/dashboard/addproducts">
              <Button semiRounded simpleBlack>
                Add New Product
              </Button>
            </Link>
          </div>
          <hr />
        </div>
      </div>
      <div>
        <div className="mt-6">
          {DATA.map((item) => {
            return <Carditem key={item.id} detail={item}></Carditem>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;

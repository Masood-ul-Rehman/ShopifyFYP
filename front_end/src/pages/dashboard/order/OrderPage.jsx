import React from "react";
import { Link } from "react-router-dom";
import Order from "../Order";
import Button from "../../../components/Button";

function OrderPage() {
  return (
    <div>
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
      </div>
      <div className="mt-4  min-h-screen">
        <Order />
      </div>
    </div>
  );
}

export default OrderPage;

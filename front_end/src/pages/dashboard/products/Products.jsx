import React from 'react';
import Carditem from './Carditem';
import DATA from './Data';

function Products() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {
            DATA.map((item) => {
              return <Carditem key={item.id} detail = {item}></Carditem>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Products;

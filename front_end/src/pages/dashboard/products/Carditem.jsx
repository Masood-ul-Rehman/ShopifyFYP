import React from 'react';
import {Link } from "react-router-dom"

function Carditem({detail}) {
  return (
    <div className="card my-5 py-4 w-72" style={{ width: "18rem" }}>
        <img src={detail.img} class="card-img-top" alt={detail.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{detail.title}</h5>
          <p className="lead">${detail.price}</p>
          <Link to={`/products/${detail.id}`} class="btn btn-outline-primary">
            Buy Now
          </Link>
        </div>
    </div>
  )
}

export default Carditem

import React, { useState } from 'react';
import {Link } from "react-router-dom"
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../store';

function Carditem({detail}) {
  const dispatch = useDispatch();

  // const [showModal, setShowModal] = useState(false);

  const showModal = useSelector((state)=>{
    return state.modal
  })

  const handleShowModal = () => {
    // setShowModal(true)
    dispatch(openModal());
  }

  return (
    <>
      <div className="flex flex-row px-4 py-2 mb-4 shadow-[0_0_10px_rgba(0,0,0,0.10)] rounded-lg items-center justify-between">
        <div className='flex items-center'>
          <div className="img w-40 h-auto rounded">
            <img src={detail.img} alt={detail.title} className='w-full rounded-md'/>
          </div>
          <div className="product-details flex flex-col ml-8">
            <h3 className='font-poppins text-xl text-neutral-800'>{detail.title}</h3>
            <h6 className='font-poppins text-base text-neutral-800'>${detail.price}</h6>
            <p className='font-poppins font-medium text-base text-neutral-800 pt-4'>availability: <span className='font-light'>{detail.quantity > 0 ? detail.quantity : "not available"}</span></p>
          </div>
        </div>

        <div className="btns flex">
          <Button semiRounded encourage>Update</Button>
          <Button semiRounded danger styles= "ml-6" onClick={handleShowModal}>Delete</Button>
        </div>
      </div>
      {showModal && <Modal />}
    </>
  )
}

export default Carditem

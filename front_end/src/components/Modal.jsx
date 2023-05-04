import React from 'react';
import ReactDOM from "react-dom";
import Button from './Button';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store';

function Modal() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeModal())
  }

  return ReactDOM.createPortal(
    <>
        <div className="fixed inset-0 bg-black opacity-80 w-screen h-screen" onClick={handleClick}></div>
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-10 bg-white w-screen md:max-w-sm h-auto rounded-2xl">
            <div className="haed flex flex-col font-poppins font-light text-base text-center items">
              <p>This will permanently delete product.</p>
              <p>Are you sure?</p>
            </div>
            <div className="btns flex justify-between mt-8">
              <Button semiRounded encourage styles="text-xs md:text-sm" onClick={handleClick}>Cancel</Button>
              <Button semiRounded danger styles="text-xs md:text-sm">Delete</Button>
            </div>
        </div>
    </>,
    document.querySelector('.modal-container')
  )

  // return (
  //   <>
  //       <div className="fixed inset-0 bg-black opacity-80 w-screen h-screen"></div>
  //       <div className="absolute inset-40 p-10 bg-white w-96 h-auto rounded-2xl">
  //           I'm a modal!
  //       </div>
  //   </>
  // )
}

export default Modal

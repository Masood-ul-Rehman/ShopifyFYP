import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../store";
import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../../../api/product";

function Carditem({ detail, setReftech }) {
  const dispatch = useDispatch();
  const deletePost = useMutation((id) => {
    return deleteProduct(id);
  });
  // const [showModal, setShowModal] = useState(false);

  const showModal = useSelector((state) => {
    return state.modal;
  });

  const handelDelete = () => {
    deletePost.mutate(detail._id);
    setReftech(true);
  };

  return <>{showModal && <Modal />}</>;
}

export default Carditem;

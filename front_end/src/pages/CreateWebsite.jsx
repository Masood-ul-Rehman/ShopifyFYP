import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewWebsiteThunk } from "../store/index";
const CreateWebsite = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    bustype: "",
  });
  const { name, bustype } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      bustype,
    };

    dispatch(NewWebsiteThunk(userData));
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="name"
        className="form-control"
        id="name"
        name="name"
        value={name}
        placeholder="Enter your bussiness name"
        onChange={onChange}
      />
      <input
        type="name"
        className="form-control"
        id="bustype"
        name="bustype"
        value={bustype}
        placeholder="Enter your Bussiness type"
        onChange={onChange}
      />
      <button type="submit">Continue</button>
    </form>
  );
};
export default CreateWebsite;

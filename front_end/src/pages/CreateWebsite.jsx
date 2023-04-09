import { useState } from "react";
import { useSelector } from "react-redux";

const CreateWebsite = () => {
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
  return (
    <div className="flex">
      <input
        type="name"
        className="form-control"
        id="name"
        name="websiteName"
        value={name}
        placeholder="Enter your bussiness name"
        onChange={onChange}
      />
      <input
        type="name"
        className="form-control"
        id="busType"
        name="bussinesstype"
        value={bustype}
        placeholder="Enter your Bussiness type"
        onChange={onChange}
      />
      <button>Continue</button>
    </div>
  );
};
export default CreateWebsite;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ImageUpload from "../components/imageUpload/imageUpload";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import "./add.scss"

const Add = () => {
  const [name, setName] = useState("");
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("img", uploadedImage.current.file);

    const body = formData;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/",
        body,
        config
      );

      if (res.status === 201) {
        console.log(body);
        console.log("Your form submitted");
      }
    } catch (err) {
      console.log(err);
      console.log(uploadedImage.current.file);
    }
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <div className="card_image">
            <h2 className="card_heading">
              Get started
              <small>Add a user</small>
            </h2>
          </div>
          <form className="card_form" onSubmit={onSubmit}>
            <ImageUpload
              uploadedImage={uploadedImage}
              imageUploader={imageUploader}
            />
            <div className="input">
              <input
                type="text"
                className="input_field"
                value={name}
                onChange={(e) => {
                  e.preventDefault()
                  setName(e.target.value);
                }}
                required
              />
              <label className="input_label">Full name</label>
            </div>
            <div className="action">
            <button className="action_button" onClick={onSubmit}>
              Get started
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;

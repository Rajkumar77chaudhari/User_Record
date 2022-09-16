import React from "react";
import "./card.scss";


const Card = ({ name, img, updateUser, deleteUser }) => {
  return (
    <div className="cardContainer">
      <div className="name-img-container">
        <img src={img} alt="user_image" />
        <h2>{name}</h2>
      </div>
      <div className="update-delete-container">
        <button onClick={updateUser}>update</button>
        <button onClick={deleteUser}>delete</button>
      </div>
    </div>
  );
};

export default Card;

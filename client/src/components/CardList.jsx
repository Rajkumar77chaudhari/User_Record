import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { useParams, useNavigate } from "react-router";
import "./cardlist.scss"

const CardList = () => {
  const [users, setUsers] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:5000/api/users";

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`${url}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setUsers(data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  const deleteUser = (id) => {
    console.log(id)
    axios
      .delete(`${url}/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload(false)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateUser = (id) => {
    
  };

  const showUsers = (user) => {
    return (
      <Card
        name={user.name}
        img={user.img}
        key={user._id}
        deleteUser={()=>deleteUser(user._id)}
        updateUser={()=>updateUser(user._id)}
      />
    );
  };

  return <div className="cardList">{users.map(showUsers)}</div>;
};
export default CardList;

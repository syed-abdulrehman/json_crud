import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./styless.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const Edit = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((e) => {
        console.log(e.data);
        setData(e.data);
        console.log("1111111111111111111111");
        let { id, name, email, password } = e.data;
        setName(name);
        setEmail(email);
        setPassword(password);
        console.log(id);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const handleSubmit = () => {
    let user = { name: name, email: email, password: password };
    console.log(user);

    axios
      .put(`http://localhost:3000/users/${id}`, user)
      .then((e) => {
        alert("user has created");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Box
        sx={{
          width: "50%",
          height: "70vh",
          border: "2px solid red",
          margin: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: "5px" }}
        >
          Edit User
        </Typography>
        <input
          type="text"
          placeholder="Enter user name"
          className="inp"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter user email"
          value={email}
          className="inp"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          value={password}
          placeholder="Enter user password"
          className="inp"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          variant="contained"
          sx={{ width: "80%", marginLeft: "65px" }}
          onClick={() => {
            handleSubmit();
          }}
        >
          Update{" "}
        </Button>
      </Box>
    </>
  );
};

export default Edit;

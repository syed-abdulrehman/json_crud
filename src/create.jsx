import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./styless.css";
import axios from "axios";
const Create = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    let user = { name: name, email: email, password: password };
    console.log(user);

    axios
      .post(`http://localhost:3000/users/`, user)
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
          Create User
        </Typography>
        <input
          type="text"
          placeholder="Enter user name"
          className="inp"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter user email"
          className="inp"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
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
          Create{" "}
        </Button>
      </Box>
    </>
  );
};

export default Create;

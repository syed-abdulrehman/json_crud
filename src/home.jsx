import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3000/users`).then((e) => {
      setData(e.data);
      console.log(data);
    });
  }, [refresh]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#e53935", color: "white" }}>
            <TableCell align="left" sx={{ color: "white", fontWeight: "bold" }}>
              Id
            </TableCell>
            <TableCell align="left" sx={{ color: "white", fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell align="left" sx={{ color: "white", fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: "white", fontWeight: "bold" }}
            ></TableCell>
            <TableCell
              align="left"
              sx={{ color: "white", fontWeight: "bold" }}
            ></TableCell>
            <TableCell
              align="left"
              sx={{ color: "white", fontWeight: "bold" }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">
                <AddIcon
                  sx={{ color: "#76ff03", cursor: "pointer" }}
                  onClick={() => {
                    Navigate("/create");
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <EditIcon
                  sx={{ color: "#ff9800" }}
                  onClick={() => {
                    Navigate(`/edit/${row.id}`);
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <DeleteIcon
                  sx={{ color: "red", cursor: "pointer" }}
                  onClick={() => {
                    axios
                      .delete(`http://localhost:3000/users/${row.id}`)
                      .then((e) => {
                        alert("user has deleted");
                        setRefresh(1);
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

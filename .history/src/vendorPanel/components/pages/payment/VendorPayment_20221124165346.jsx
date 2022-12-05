/** @format */

import HOC from "../../layout/HOC";
import { AiFillDelete, AiFillEdit, AiOutlineClose } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  minHeight: 400,
  p: 2,
  border: "1px solid #ccc",
  boxShadow: 50,
};

const pay = [
  {
    user: "User1",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Pending",
    Amount: 5000,
  },
  {
    user: "User2",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Success",
    Amount: 10000,
  },
  {
    user: "User3",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Success",
    Amount: 500000,
  },
  {
    user: "User4",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Pending",
    Amount: 5000,
  },
];

const VendorPayment = () => {

  
export default VendorPayment;

/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

const Seller = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
  const [service, setService] = useState([]);

  //All Services
  const token = localStorage.getItem("token");
  const AllSellers = async () => {
    try {
      const { data } = await axios.get(
        "https://pitzone-backend.herokuapp.com/api/seller",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    AllSellers();
    serviceType();
  }, [axios, setData]);

  //Delete Service
  const deleteService = async (id) => {
    try {
      const data = await axios.delete(
        `  https://pitzone-backend.herokuapp.com/api/service/${id}`
      );
      toast.success("Service Deleted SuccessFully");
      AllSellers();
    } catch (err) {
      console.log(err);
      toast.error("Please try again");
    }
  };

  // Add Service

  const [name, setN] = useState("");
  const [email, setE] = useState("");
  const [password, setP] = useState("");

  const addSeller = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        " https://pitzone-backend.herokuapp.com/api/seller",
        { name, email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Seller added successfully");
      handleClose();
      AllSellers();
    } catch (err) {
      console.log(err);
    }
  };

  //Edit Service
  const [Id, setID] = useState("");
  const [edit, setEdit] = useState(false);

  const editService = async (e) => {
    e.preventDefault();
    let fd = new FormData();
    try {
      const { data } = await axios.put(
        `  https://pitzone-backend.herokuapp.com/api/service/${Id}`,
        fd
      );
      toast.success("service Edited Successfully");
      handleClose();
      AllSellers();
    } catch (err) {
      console.log(err);
      toast.error("Please try again");
    }
  };

  //All service T

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white ">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Sellers
          </span>
          <button
            onClick={() => {
              setEdit(false);
              handleOpen();
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
          >
            Add Sellor
          </button>
        </div>

        {/* Modal  */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "600" }}>
                {" "}
                {edit ? "Edit Service" : "Add Service"}
              </h2>
              <AiOutlineClose
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => handleClose()}
                className="text-4xl"
              />
            </div>

            <form className="mt-14" onSubmit={edit ? editService : addSeller}>
              <label>Name</label>
              <input
                required
                type={"text"}
                style={{
                  color: "black",
                  border: "none",
                  outline: " none",
                  borderBottom: "1px solid black",
                  marginLeft: "10px",
                }}
                onChange={(e) => setN(e.target.value)}
              />
              <br />
              <label>Email</label>
              <input
                required
                type={"email"}
                style={{
                  color: "black",
                  border: "none",
                  outline: " none",
                  borderBottom: "1px solid black",
                  marginLeft: "10px",
                }}
                onChange={(e) => setE(e.target.value)}
              />
              <br />
              <label>Password</label>
              <input
                required
                type={"password"}
                style={{
                  color: "black",
                  border: "none",
                  outline: " none",
                  borderBottom: "1px solid black",
                  marginLeft: "10px",
                }}
                onChange={(e) => setP(e.target.value)}
              />
              <br />
              <br />
              <Button
                variant="outlined"
                color="success"
                type="submit"
                style={{ width: "80%", fontSize: "1.2rem" }}
              >
                {edit ? "Edit Service" : "Add New Service"}
              </Button>
            </form>
          </Box>
        </Modal>

        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:textP-base text-sm">
                  Image
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:textP-base text-sm">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:textP-base text-sm">
                  Email
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.data?.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900 ">
                    <td className=" px-4 py-3  space-x-3 ">
                      <img
                        alt="Seller"
                        src={
                          e.profile.url
                            ? e.profile.url
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
                        }
                        style={{ width: "80px" }}
                        className="img-fluid thumbnail roundedCircle "
                      />
                    </td>
                    <td className=" px-4 py-3  space-x-3 ">{e.name}</td>
                    <td className=" px-4 py-3  space-x-3 ">{e.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Seller);

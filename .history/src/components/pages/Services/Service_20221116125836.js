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

const Service = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
  const [service, setService] = useState([]);

  //All Services
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://pitzone-backend.herokuapp.com/api/service"
      );
      setData(data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchUsers();
    serviceType();
  }, [axios, setData]);

  //Delete Service
  const deleteService = async (id) => {
    try {
      const data = await axios.delete(
        `  https://pitzone-backend.herokuapp.com/api/service/${id}`
      );
      toast.success("Service Deleted SuccessFully");
      fetchUsers();
    } catch (err) {
      console.log(err);
      toast.error("Please try again");
    }
  };

  // Add Service
  const [serviceName, setS] = useState("");
  const [serviceTypeId, setSID] = useState("");
  const [myField, setF] = useState("");
  const addService = async (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("serviceName", serviceName);
    fd.append("serviceTypeId", serviceTypeId);
    fd.append("myField", myField);
    try {
      const data = await axios.post(
        "  https://pitzone-backend.herokuapp.com/api/service",
        fd
      );
      toast.success("Service added successfully");
      handleClose();
      fetchUsers();
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
    fd.append("serviceName", serviceName);
    fd.append("serviceTypeId", serviceTypeId);
    fd.append("myField", myField);
    try {
      const { data } = await axios.put(
        `  https://pitzone-backend.herokuapp.com/api/service/${Id}`,
        fd
      );
      toast.success("service Edited Successfully");
      handleClose();
      fetchUsers();
    } catch (err) {
      console.log(err);
      toast.error("Please try again");
    }
  };

  //All service Type
  const serviceType = async () => {
    try {
      const { data } = await axios.get(
        " https://pitzone-backend.herokuapp.com/api/service-type"
      );
      setService(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white ">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Total Services
          </span>
          <button
            onClick={() => {
              setEdit(false);
              handleOpen();
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
          >
            Add Service
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

            <form className="mt-14" onSubmit={edit ? editService : addService}>
              <label>Image</label>
              <input
                required
                type={"file"}
                onChange={(e) => setF(e.target.files[0])}
              />
              <br />
              <label>Service Name</label>
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
                onChange={(e) => setS(e.target.value)}
              />
              <br />
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Select Service
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  label="Select Service Type"
                  onChange={(e) => setSID(e.target.value)}
                >
                  {service?.data?.map((i, index) => (
                    <MenuItem
                      value={i._id}
                      key={index}
                      style={{ fontSize: "1.4rem", fontWeight: "600" }}
                    >
                      {i.serviceTypeName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br /> <br />
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
                  Service Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.data?.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900 ">
                    <td className=" px-4 py-3  space-x-3 ">
                      <img
                        alt="Services"
                        src={
                          e.serviceImg.url
                            ? e.serviceImg.url
                            : "https://static7.depositphotos.com/1003098/699/i/600/depositphotos_6993693-stock-photo-happy-young-girl-using-cell.jpg"
                        }
                        style={{ width: "80px" }}
                        className="img-fluid thumbnail rounded"
                      />
                    </td>
                    <td className=" px-4 py-3  space-x-3 ">{e.serviceName}</td>

                    <td
                      className="px-4 py-3  space-x-3"
                      style={{ display: "flex" }}
                    >
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => deleteService(e._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outlined"
                        color="info"
                        onClick={() => {
                          setID(e._id);
                          setEdit(true);
                          handleOpen();
                        }}
                      >
                        Update
                      </Button>
                    </td>
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

export default HOC(Service);

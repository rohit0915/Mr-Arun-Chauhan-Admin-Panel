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
    const AllSellers = async () => {
      try {
        const { data } = await axios.get(
          "https://pitzone-backend.herokuapp.com/api/seller"
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
        AllSellers();
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
              All Sellers
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
                <FormControl sx={{ m: 1, minWidth : 100 }}>
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
                     Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:textP-base text-sm">
                     Email
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
                            e.profile.url
                              ? e.profile.url
                              : 'data:image/png;base64,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'
                          }
                          style={{ width: "80px" }}
                          className="img-fluid thumbnail roundedCircle "
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

export default HOC(Seller)
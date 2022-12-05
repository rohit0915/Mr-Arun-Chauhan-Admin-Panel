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
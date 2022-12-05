/** @format */

import React, { useEffect, useState } from "react";
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
import HOC from "../../layout/HOC";

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

const service = [
  {
    img: " https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/11/Most-Googled-Questions-On-Car-Service-In-India-Answered.jpg?fit=1168%2C601&ssl=1",
    name: "Petrol",
  },
  {
    img: "https://imgd.aeplcdn.com//642x361//n/cw/ec/94113/front-view1.jpeg?wm=1&q=75",
    name: "Repair",
  },
  {
    img: "http://www.pitcrew.co.in//images/car-side.png",
    name: "Car Denting",
  },
];

const VendorServiceRegistration = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [edit, setEdit] = useState(false);
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

            <form className="mt-14">
              <label>Image</label>
              <input required type={"file"} />
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
              />
              <br />
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Select Service Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  label="Select Service Type"
                >
                  <MenuItem style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                    Washing
                  </MenuItem>
                  <MenuItem style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                    Denting
                  </MenuItem>
                  <MenuItem style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                    Repairing
                  </MenuItem>
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
              {service.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900 ">
                    <td className=" px-4 py-3  space-x-3 ">
                      <img
                        alt="Services"
                        src={
                            i
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

export default HOC(VendorServiceRegistration);

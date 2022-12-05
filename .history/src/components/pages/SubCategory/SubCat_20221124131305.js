/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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

const SubCat = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
  
    return (
      <>
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white ">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All Sellers
            </span>
            <button
              onClick={() => {
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
                 Add Seller
                </h2>
                <AiOutlineClose
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => handleClose()}
                  className="text-4xl"
                />
              </div>
  
              <form className="mt-14">
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
                   />
                <br />
                <br />
                <Button
                  variant="outlined"
                  color="success"
                  type="submit"
                  style={{ width: "80%", fontSize: "1.2rem" }}
                >
               Add Sub Category
                </Button>
              </form>
            </Box>
          </Modal>
  
          <div className=" wcomp overflow-y-auto">
            <table className="table-auto  w-full text-left whitespace-no-wrap">
              <thead>
                <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:textP-base text-sm">
                    Parent Category
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:textP-base text-sm">
                    Sub Category
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

export default HOC(SubCat)
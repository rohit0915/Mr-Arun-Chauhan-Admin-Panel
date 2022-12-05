/** @format */

import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import HOC from "../../layout/HOC";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditSharpIcon from "@mui/icons-material/ModeEditSharp";

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


const Testi = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <>
        <section>
          <div className="flex  justify-between">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All Testimonials
            </span>
            <button
              onClick={handleOpen}
              className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
            >
              Add Tes
            </button>
          </div>
  
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <AiOutlineClose
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => handleClose()}
                className="text-4xl"
              />
              <form className="mt-14" onSubmit={addBanner}>
                <label>Image</label>
                <input
                required
                  type={"file"}
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <br />
  
                <Button variant="contained" color="success" type="submit">
                  Success
                </Button>
              </form>
            </Box>
          </Modal>
  
          <section
            className="main-card--container"
            style={{ color: "black", marginBottom: "10%" }}
          >
            {data?.data?.map((i) => {
              return (
                <>
                  <div className="card-container">
                    <div className="card">
                      <div className="card-body">
                        <img src={i.banner.url} className="BannerImg" />
                        <div
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          <Button
                            variant="outlined"
                            style={{
                              border: "1px solid red",
                              color: "red",
                              width: "100%",
                            }}
                            startIcon={<DeleteIcon color="error" />}
                            onClick={() => deleteBanner(i._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </section>
        </section>
      </>
    );
  };

export default HOC(Testi)
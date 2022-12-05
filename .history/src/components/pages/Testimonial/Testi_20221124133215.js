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

const Test =[
    {
        img : 'https://getstencil.com/templates/tmplylbf4tyc/download'
    },
    {
        img : 'https://www.sliderrevolution.com/wp-content/uploads/2022/02/asana.jpg'
    },
    {
        img : 'https://ps.w.org/super-testimonial/assets/icon-256x256.png?rev=1478933'
    },
    {
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoaCNueoIRbrfRIxUq_PPH5a0k088lsUNCZMC7ocNcfryobogmRoiC6mnvZ-gNgD4MIyw&usqp=CAU'
    },
]


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
            Add Testimonials
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
            <form className="mt-14">
              <label>Image</label>
              <input required type={"file"} />
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
          {Te.map((i) => {
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

export default HOC(Testi);

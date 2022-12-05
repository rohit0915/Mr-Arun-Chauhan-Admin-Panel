/** @format */

import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import HOC from "../../layout/HOC";
import axios from "axios";

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

const Gallary = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Admin token
  const token = localStorage.getItem("token");

  //Fetch All banners
  const [data, setData] = useState([]);

  const Banners = async () => {
    try {
      const { data } = await axios.get(
        " https://pitzone-backend.herokuapp.com/api/banner/"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Banners();
  }, [axios]);

  // Add Banner

  const [image, setImage] = useState("");

  const addBanner = async (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("myField", image);
    try {
      const { data } = await axios.post(
        " https://pitzone-backend.herokuapp.com/api/banner/",
        fd,
        token
      );
      Banners();
      toast.success("Banner added successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <div className="flex  justify-between">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Banners
          </span>
          <button
            onClick={handleOpen}
            className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
          >
            Add Banners
          </button>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
     
          <Box sx={style}>
          <AiOutlineClose  style={{float : 'right' }} className=/>
            <form>
              <label>Image</label>
              <input type={"file"} />
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
                      <img
                        src={i.banner.url}
                        className="BannerImg"
                        // style={{ width: "100%", height: "200px" }}
                      />
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

export default HOC(Gallary);

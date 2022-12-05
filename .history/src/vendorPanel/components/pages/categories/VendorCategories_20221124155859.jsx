/** @format */

import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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

const Cat = [
  {
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg?tr=w-375",
    name: "Car Wash",
  },
  {
    img: "https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=2000",
    name: "Car Denting",
  },
  {
    img: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
    name: "Car Renting",
  },
];

const VendorCategories = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [edit, setEdit] = useState(false);
  return (
    <>
      <section>
        <div className="flex  justify-between">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Categories
          </span>
          <button
            onClick={() => {
              setEdit(false);
              handleOpen();
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
          >
            Add Categories
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
            <h1></h1>
            <form className="mt-14" >
              <label>Image</label>
              <input
                required
                type={"file"}
              />
              <br />
              <label>Category Name</label>
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
              <br />

              <Button
                variant="outlined"
                color="success"
                type="submit"
                style={{ width: "80%", fontSize: "1.2rem" }}
              >
                {edit ? "Edit" : "Add"}
              </Button>
            </form>
          </Box>
        </Modal>

        <section
          className="main-card--container"
          style={{ color: "black", marginBottom: "10%" }}
        >
          {Cat.map((i) => {
            return (
              <>
                <div className="card-container">
                  <div className="card">
                    <div className="card-body">
                      <img src={i.img} alt=''  className="BannerImg" />

                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          textAlign: "center",
                        }}
                      >
                        <h2 style={{ fontSize: "2rem", marginTop: "5px" }}>
                          {i.name}
                        </h2>
                      </div>
                      <div
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{
                            border: "1px solid red",
                            color: "red",
                            // width: "100%",
                          }}
                          startIcon={<DeleteIcon color="error" />}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="outlined"
                          style={{
                            border: "1px solid blue",
                            color: "blue",
                          }}
                          startIcon={<EditIcon color="info" />}
                          onClick={() => {
                            setEdit(true);
                            handleOpen();
                          }}
                        >
                          Edit
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

export default HOC(VendorCategories);

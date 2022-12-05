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
import EditIcon from "@mui/icons-material/Edit";

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

const Brand = () => {
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
        " https://pitzone-backend.herokuapp.com/api/brand/"
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
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  const addBanner = async (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("myField", image);
    fd.append("name", name);
    fd.append("description", text);

    try {
      const { data } = await axios.post(
        "https://pitzone-backend.herokuapp.com/api/brand/",
        fd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Banners();
      handleClose();
      toast.success("Brand added successfully");
    } catch (err) {
      console.log(err);
    }
  };

  // delet Banner
  const deleteBanner = async (id) => {
    try {
      const data = await axios.delete(
        ` https://pitzone-backend.herokuapp.com/api/brand/${id}`
      );
      toast.success("Brand Deleted Successfully");
      Banners();
    } catch (err) {
      console.log(err);
    }
  };

  //Edit Category

  const [id, setID] = useState("");
  const [edit, setEdit] = useState(false);

  const editCat = async (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("myField", image);
    fd.append("name", name);
    fd.append("description", text);
    try {
      const data = await axios.put(
        `}`,
        fd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Banners();
      handleClose();
      toast.success("Category edited successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <div className="flex  justify-between">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Brands
          </span>
          <button
            onClick={() => {
              setEdit(false);
              handleOpen();
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
          >
            Add Brands
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
            <form className="mt-14" onSubmit={edit ? editCat : addBanner}>
              <label>Image</label>
              <input
                type={"file"}
                onChange={(e) => setImage(e.target.files[0])}
              />
              <br />
              <label>Category Name</label>
              <input
                type={"text"}
                style={{
                  color: "black",
                  border: "none",
                  outline: " none",
                  borderBottom: "1px solid black",
                  marginLeft: "10px",
                }}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <textarea
                style={{
                  backgroundColor: "#dce3de",
                  width: "80%",
                  outline: "none",
                  padding: "10px",
                }}
                onChange={(e) => setText(e.target.value)}
              />

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
          {data?.data?.map((i) => {
            return (
              <>
                <div className="card-container">
                  <div className="card">
                    <div className="card-body">
                      <div style={{ display: "flex", gap: "30px" }}>
                        <div className="brandLeft">
                          {" "}
                          <img src={i.brandImg.url} className="BannerImg" />
                        </div>
                        <div style={{ borderRight: "1px solid black" }}></div>

                        <div className="brandRight">
                          <h2 style={{ fontSize: "2rem", marginTop: "5px" }}>
                            {i.name}
                          </h2>
                          <h2
                            style={{
                              fontSize: "2rem",
                              marginTop: "5px",
                              maxWidth: "300px",
                            }}
                          >
                            {i.description}
                          </h2>
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              marginTop: "10%",
                            }}
                          >
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid red",
                                color: "red",
                              }}
                              startIcon={<DeleteIcon color="error" />}
                              onClick={() => deleteBanner(i._id)}
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
                                setID(i._id);
                                setEdit(true);
                                handleOpen();
                              }}
                            >
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* <img src={i.brandImg.url} className="BannerImg" />
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
                          <h2 style={{ fontSize: "2rem", marginTop: "5px" }}>
                            {i.description}
                          </h2>
                        </div>
                       */}
                      {/* </div> */}
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

export default HOC(Brand);

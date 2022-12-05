import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import { Oval } from "react-loader-spinner";
import BaseUrl from "../../BaseUrl";
import { toast } from "react-toastify";

const VendorCategories = () => {
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
        " https://pitzone-backend.herokuapp.com/api/category"
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

  const addBanner = async (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("myField", image);
    fd.append("category", name);
    try {
      const { data } = await axios.post(
        " https://pitzone-backend.herokuapp.com/api/category",
        fd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Banners();
      handleClose();
      toast.success("Category added successfully");
    } catch (err) {
      console.log(err);
    }
  };

  // delet Banner
  const deleteBanner = async (id) => {
    try {
      const data = await axios.delete(
        ` https://pitzone-backend.herokuapp.com/api/category/${id}`
      );
      toast.success("category Deleted Successfully");
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
    fd.append("category", name);
    try {
      const data = await axios.put(
        ` https://pitzone-backend.herokuapp.com/api/category/${id}`,
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
            <form className="mt-14" onSubmit={edit ? editCat : addBanner}>
              <label>Image</label>
              <input
              required
                type={"file"}
                onChange={(e) => setImage(e.target.files[0])}
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
                onChange={(e) => setName(e.target.value)}
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
          {data?.data?.map((i) => {
            return (
              <>
                <div className="card-container">
                  <div className="card">
                    <div className="card-body">

                      <img src={i.categoryImg.url} className="BannerImg" />
                 
                      <div
                        style={{
                          display: "block",
                          margin: "auto",
                          textAlign: "center",
                        }}
                      >
                        <h2 style={{ fontSize: "2rem", marginTop: "5px" }}>
                          {i.category}
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

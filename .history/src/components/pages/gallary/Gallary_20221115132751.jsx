/** @format */

import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";

import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import auth from "../../Auth";
import Banner from "../banner/Banner";

const Gallary = () => {
  const [popup, setPopup] = useState(false);

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
      setPopup(false);
      toast.success("Banner added successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>


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

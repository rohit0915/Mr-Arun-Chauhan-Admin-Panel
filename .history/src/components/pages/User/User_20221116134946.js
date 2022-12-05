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

const User = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [data, setData] = useState([]);
  
    //All Users
    const AllSellers = async () => {
      try {
        const { data } = await axios.get(
          " https://pitzone-backend.herokuapp.com/api/user"
        );
        setData(data);
      } catch (err) {
        console.log("err", err);
      }
    };
    useEffect(() => {
      AllSellers();
    }, [axios, setData]);
  

  
  
  
  
    return (
      <>
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white ">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All Users
            </span>
          
          </div>
  
   
  
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
                    Phone Number
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
export default HOC(User)
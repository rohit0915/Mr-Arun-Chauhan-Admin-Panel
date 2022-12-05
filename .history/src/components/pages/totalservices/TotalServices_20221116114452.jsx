/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";

const TotalServices = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [data, setData] = useState([]);
  const [a, setA] = useState([]);
  const [p, setP] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        " https://pitzone-backend.herokuapp.com/api/service-type"
      );
      setData(data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [axios, setData]);

  const deleteuser = async (_id) => {
    try {
      fetchUsers();
    } catch (e) {
      toast.error(e.name);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white ">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Total Services
          </span>
          <button
            onClick={() => {
              handleOpen();
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
          >
            Add Blogs
          </button>
        </div>

        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:textP-base text-sm">
                  Service Type Name
                </th>

                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.data?.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900 ">
                    <td className=" px-4 py-3  space-x-3 ">
                      {e.serviceTypeName}
                    </td>

                    <td
                      className="px-4 py-3  space-x-3"
                      style={{ display: "flex" }}
                    >
                      <Button variant="outlined" color="error">
                        Delete
                      </Button>
                      <Button variant="outlined" color="info">
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

export default HOC(TotalServices);

import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import auth from "../../Auth";

import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";

const Support = () => {
  const [popup, setPopup] = useState(false);
  const [support, setSupport] = useState([]);
  const [edit, setEdit] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [cat, setCat] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState();

  const fetchSupport = async () => {
    const url = BaseUrl() + "/hns/getall";
    try {
      const res = await axios.get(url, auth);
      console.log("res", res);
      setSupport(res.data);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchSupport();
  }, []);

  const addTerms = async (e) => {
    e.preventDefault();
    const url = BaseUrl() + "/tnc/add";

    const data = {
      description: desc,
    };

    try {
      const res = await axios.post(url, data, auth);
      console.log("res", res);
      toast.success("Added Successfully");
    } catch (err) {
      console.log("err", err);
      toast.error("Please try again");
    } finally {
      fetchSupport();
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Help and Support
          </span>
          {/* <button
            onClick={() => {
              setEdit("");
              setPopup(!popup);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Terms
          </button> */}
        </div>
        {/* Add Form */}
   
        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Mobile
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Query
                </th>
              </tr>
            </thead>
            <tbody>
          
                  <tr className="tracking-wider text-gray-900 ">
                    <td className="px-4 py-3 md:text-base text-sm">
                   1234567980
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">React</td>
                    <td className="px-4 py-3 md:text-base text-sm">
                    In publishing and graphic design, Lorem ipsum is a placeho\
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

export default HOC(Support);

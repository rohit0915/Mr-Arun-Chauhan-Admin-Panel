/** @format */

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import HOC from "../../layout/HOC";
import { Button } from "@mui/material";

const coupons = [
  {
    couponcode: "ASDS45",
    discount: "23%",
  },
  {
    couponcode: "EASD75",
    discount: "50%",
  },
  {
    couponcode: "REGF78",
    discount: "10%",
  },
];

const CouponsDiscount = () => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Coupons Discount
          </span>
          <button
            onClick={() => {
              setPopup(!popup);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Coupons
          </button>
        </div>
        {/* Add Form */}
        <section
          className={
            popup
              ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
          style={{ zIndex: 9999  , width : '100%'}}
        >
          <div className="bg-slate-100 sm:h-[90vh] h-[80vh] overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span className=" font-semibold text-[rgb(241,146,46)] " style={{}}>
                Add Coupons
              </span>
              <div className="text-[rgb(241,146,46)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                <IoMdClose
                  onClick={() => {
                    setPopup(false);
                  }}
                />{" "}
              </div>
            </div>

            <form className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4">
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Coupon Code
                </label>
                <input
                  required
                  type="text"
                  name="couponCode"
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                />
              </div>

              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Discount
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="discount"
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                />
              </div>

              <button
                type="submit"
                value="Add"
                className="bg-[rgb(241,146,46)] cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
              >
                Add{" "}
              </button>
            </form>
          </div>
        </section>
        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Coupon Code
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Discount
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((i, index) => (
                <tr key={index} className="tracking-wider text-gray-900 ">
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.couponcode}{" "}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.discount}{" "}
                  </td>
                  <td
                    className="px-4 py-3 md:text-base text-sm "
                    style={{ display: "flex", gap: "10px", marginTop: "20px" }}
                  >
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                    <Button variant="outlined">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(CouponsDiscount);

/** @format */

import HOC from "../../layout/HOC";
import { AiFillDelete ,AiFillEdit } from "react-icons/ai";

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

const pay = [
  {
    user: "User1",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Pending",
    Amount: 5000,
  },
  {
    user: "User2",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Success",
    Amount: 10000,
  },
  {
    user: "User3",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Success",
    Amount: 500000,
  },
  {
    user: "User4",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Pending",
    Amount: 5000,
  },
];

const Payment = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white ">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Payment Deatils
          </span>
        </div>

        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                  User Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                  Phone
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  date
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Status
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Amount
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {pay.map((i, index) => (
                <tr key={index} className="tracking-wider text-gray-900 ">
                  <td className="px-4 py-3 md:text-base text-sm">{i.user}</td>
                  <td className="px-4 py-3 md:text-base text-sm">{i.phone}</td>
                  <td className="px-4 py-3 md:text-base text-sm">{i.date}</td>
                  <td className="px-4 py-3 md:text-base text-sm">{i.status}</td>
                  <td className="px-4 py-3 md:text-base text-sm">{i.Amount}</td>
                  <td className="px-4 py-3  space-x-3">
                    <button className="font-semibold tracking-widest">
                      <AiFillDelete className="text-lg md:text-2xl" color="red"/>
                    </button>
                    <button className="font-semibold tracking-widest">
                      <AiFillEdit className="text-lg md:text-2xl" color="blue"/>
                    </button>
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

export default HOC(Payment);
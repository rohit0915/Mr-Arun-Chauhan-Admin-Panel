/** @format */

import HOC from "../../layout/HOC";
import { AiFillDelete } from "react-icons/ai";


const pay = [
  {
    user: "User1",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Pending",
    Amount: 5000,
    Message : 'Error Resolvig thi spa arakd fsds kof fmb sofds,nfdsfif .'
  },
  {
    user: "User2",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Success",
    Amount: 10000,
    Message : 'Error Resolvig thi spa arakd fsds kof fmb sofds,nfdsfif .'
  },
  {
    user: "User3",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Success",
    Amount: 500000,
    Message : 'Error Resolvig thi spa arakd fsds kof fmb sofds,nfdsfif .'
  },
  {
    user: "User4",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Pending",
    Amount: 5000,
  },
];

const Complaint = () => {
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
                  Message
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
                  <td className="px-4 py-3  space-x-3">
                    <button className="font-semibold tracking-widest">
                      <AiFillDelete
                        className="text-lg md:text-2xl"
                        color="red"
                      />
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

export default HOC(Complaint);

/** @format */

import HOC from "../../layout/HOC";

const Orders = [{}];

const VendorOrders = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All VendorOrders
          </span>
        </div>

        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm">
                  User 
                </th>

                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                  Product
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                  Phone
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
               Address
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Shipping Price
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Discount
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Role
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="tracking-wider text-gray-900 ">
                <td className=" py-3 w-36 md:text-base text-sm ">
                  <img
                    src={""}
                    alt=""
                    className="xl:w-36 shadow-xl rounded-lg lg:w-32 md:w-28 w-24"
                  />
                </td>
                <td className="px-4 py-3 md:text-base text-sm"></td>
                <td className="px-4 py-3 md:text-base text-sm"></td>
                <td className="px-4 py-3 md:text-base text-sm"></td>
                <td className="px-4 py-3 md:text-base text-sm"></td>
                <td className="px-4 py-3 md:text-base text-sm"></td>
                <td className="px-4 py-3 md:text-base text-sm"> </td>
                <td className="px-4 py-3  space-x-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(VendorOrders);

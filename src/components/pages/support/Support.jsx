/** @format */

import HOC from "../../layout/HOC";

const Support = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Help and Support
          </span>
        </div>

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
                <td className="px-4 py-3 md:text-base text-sm">1234567980</td>
                <td className="px-4 py-3 md:text-base text-sm">React</td>
                <td className="px-4 py-3 md:text-base text-sm">
                  In publishing and graphic design, Lorem ipsum is a placeho\
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Support);

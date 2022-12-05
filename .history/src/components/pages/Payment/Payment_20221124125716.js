/** @format */

import HOC from "../../layout/HOC";

const pay = [
  {
    user : 'User1' , 
    phone : 1234567890 , 
    date : '12/01/2022' , 
    status : 'Pending' , 
    Amount : 5000
  },
  {
    user : 'User2' , 
    phone : 1234567890 , 
    date : '12/01/2022' , 
    status : 'Success' , 
    Amount : 10000
  },
  {
    user : 'User3' , 
    phone : 1234567890 , 
    date : '12/01/2022' , 
    status : 'Success' , 
    Amount : 5000
  },
  {
    user : 'User1' , 
    phone : 1234567890 , 
    date : '12/01/2022' , 
    status : 'Pending' , 
    Amount : 5000
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
              {/* {users?.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900 ">
                    <td className=" py-3 w-36 md:text-base text-sm ">
                      <img
                        src={BaseUrl() + "/" + e.profileImage}
                        alt={e.name}
                        className="xl:w-36 shadow-xl rounded-lg lg:w-32 md:w-28 w-24"
                      />
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">{e.name}</td>
                    <td className="px-4 py-3 md:text-base text-sm">
                      {e.email}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">
                      {e.mobile}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">
                      {e.address}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">
                      {e.pincode}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">{e.role}</td>
                    <td className="px-4 py-3  space-x-3">
                      <button className="font-semibold tracking-widest">
                        <GrFormClose
                          className="text-lg md:text-2xl"
                          onClick={() => deleteuser(e._id)}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Payment);

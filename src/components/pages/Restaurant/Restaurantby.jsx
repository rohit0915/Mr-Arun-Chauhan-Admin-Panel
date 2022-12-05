import React from "react";
import axios from "axios";
import HOC from "../../layout/HOC";
import { Oval } from "react-loader-spinner";
import { useState } from "react";
import auth from "../../Auth";
import BaseUrl from "../../../vendorPanel/components/BaseUrl";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Restaurantby = () => {
  const [loading, setLoading] = useState(false);
  const [restaurantby, setRestaurantby] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const fetchRestaurantby = async () => {
    setLoading(true);
    const url = BaseUrl() + `/api/admin/restaurants/${params.id}`;
    console.log("fetchRestaurantbyURL===>", url);

    try {
      const res = await axios.get(url, auth);
      console.log("params.id", res);

      setRestaurantby([res.data]);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRestaurantby();
  }, []);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase">
            Restaurant Name :{restaurantby[0]?.name}
          </span>
        </div>
        <div div className=" wcomp overflow-y-auto">
          {loading && <Oval className="align-center" />}

          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Restaurant image
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Restaurant Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Restaurant Email
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Restaurant Adress
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Restaurant Contact
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Restaurant Menu
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Restaurant AvgStarRating
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Dishes
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Categories
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm ">
                  Coupons
                </th>
              </tr>
            </thead>
            <tbody>
              {restaurantby?.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900">
                    <td className=" py-3 w-36 md:text-base text-sm ">
                      <img
                        src={e.profile}
                        alt=""
                        className="xl:w-36 shadow-xl rounded-lg lg:w-32 md:w-28 w-24"
                      />
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                      {e.name}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                      {e.email}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                      {e.address}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                      {e.contact}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                      {e.menu}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                      {e.avgRating}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                      <button
                        onClick={() => navigate(`/${params.id}/dishes`)}
                        className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
                      >
                        View Dishes
                      </button>
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                      <button
                        onClick={() => navigate(`/${params.id}/categories`)}
                        className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
                      >
                        View Categories
                      </button>
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                      <button
                        onClick={() =>
                          // navigate(`coupons/restaurant/${params.id}`)
                          navigate(`/restaurant/${params.id}/coupons`)
                        }
                        className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
                      >
                        View Coupons
                      </button>
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
export default HOC(Restaurantby);

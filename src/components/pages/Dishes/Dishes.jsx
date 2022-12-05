import React from "react";
import BaseUrl from "../../BaseUrl";
import { useState, useEffect } from "react";
import HOC from "../../layout/HOC";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useParams } from "react-router-dom";
import auth from "../../Auth";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";

const Dishes = () => {
  const [loading, setLoading] = useState(false);
  const [Dishes, setDishes] = useState([]);
  const params = useParams();
  const [popup, setPopup] = useState(false);
  const [edit, setEdit] = useState(false);

  const url = BaseUrl() + `/api/admin/restaurants/${params.id}/dishes`;

  const fetchDishes = async () => {
    try {
      const res = await axios.get(url, auth);
      if (res?.data?.message) {
        setDishes([]);
        toast("No Dishes Found");
      } else {
        setDishes(res?.data);
      }
      setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const deleteDish = async (id) => {
    const url = BaseUrl() + `/api/admin/dishes/${id}`;
    try {
      const res = await axios.delete(url, auth);
      toast.success("Deleted Successfully");
      fetchDishes();
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Dishes
          </span>
        </div>
        <div>
          <div className=" wcomp overflow-y-auto">
            {loading && <Oval className="align-center" />}
            <table className="table-auto  w-full text-left whitespace-no-wrap">
              <thead>
                <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Dish Image
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Dish Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Dish Description
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Price for Small portion
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Price for Medium portion
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Price for Large portion
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Currency
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Likes
                  </th>

                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Dishes?.map((e, i) => {
                  return (
                    <tr key={i} className="tracking-wider text-gray-900">
                      <td className=" py-3 w-36 md:text-base text-sm ">
                        <img
                          src={`https://amol-home-foodie.herokuapp.com/${e.foodImg}`}
                          alt=""
                        />
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.dishName}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.description}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.priceForSmallPortion}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.priceForMediumPortion}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.priceForLargePortion}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.currency}
                      </td>
                      <td className="px-4 py-3 md:text-base text-sm cursor-pointer">
                        {e.numLikes}
                      </td>

                 
                      <td className="px-4 py-3  space-x-3">
                        <button className="font-semibold tracking-widest">
                          <GrFormClose
                            className="text-lg md:text-2xl"
                            onClick={() => deleteDish(e._id)}
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default HOC(Dishes);

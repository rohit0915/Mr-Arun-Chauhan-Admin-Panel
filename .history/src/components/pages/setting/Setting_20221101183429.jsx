import React from "react";
import HOC from "../../layout/HOC";
import {
  MdDashboardCustomize,
  MdOutlineLibraryBooks,
  MdCategory,
  MdInfo,
  MdVerifiedUser,
  MdList,
  MdPrivacyTip,
} from "react-icons/md";
import { BiSupport, BiLogOutCircle } from "react-icons/bi";
import { CgTerminal } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const dash = (data) => {
  console.log(data, "data");
  return data;
};

const Setting = () => {
  const navigate = useNavigate();
  const Go = (redirectionUrl) => {
    navigate(redirectionUrl);
  };

  const card = [
    {
      progress: "bg-blue-400",
      title: "Privacy Policy",
      icon: <MdPrivacyTip className="text-2xl text-[rgb(240,72,88)]" />,
      redirectionUrl: "/privacyPolicy",
    },
    {
      progress: "bg-blue-400",
      title: "Terms and Condition",
      icon: <MdPrivacyTip className="text-2xl text-[rgb(240,72,88)]" />,
      redirectionUrl: "/termsAndCondition",
    },
    {
      progress: "bg-blue-400",
      title: "Help and Support",
      icon: <MdPrivacyTip className="text-2xl text-[rgb(240,72,88)]" />,
      redirectionUrl: "/helpAndSupport",
    },
    {
      progress: "bg-yellow-400",
      title: "Logout",
      icon: <BiLogOutCircle className="text-2xl text-[rgb(240,72,88)]" />,
      redirectionUrl: "/login",
    },
    
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4 cursor-pointer">
        {card.map((cardItem) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
              onClick={() => Go(cardItem.redirectionUrl)}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {cardItem.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold cursor-pointer">
                    {cardItem.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center cursor-pointer">
                  {cardItem.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default HOC(Setting);

/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdPermDataSetting } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { BsCardImage } from "react-icons/bs";
import { CgTerminal } from "react-icons/cg";
import { MdPrivacyTip, MdOutlineInfo } from "react-icons/md";
import { BiSupport, BiUser, BiRestaurant, BiCategoryAlt } from "react-icons/bi";
import { TbJewishStar } from "react-icons/tb";
import { GiKnightBanner } from "react-icons/gi";
import image from "../../../src/components/Assets/Logo.png";
import { BiLogOutCircle, BiPaperclip, BiMoney } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaBloggerB, FaUserAlt } from "react-icons/fa";

import {
  MdDashboardCustomize,
  MdOutlineProductionQuantityLimits,
  MdSell,
  MdMiscellaneousServices,
  MdPayment,
  MdOutlineCategory,\MdImageAspectRatio
} from "react-icons/md";

import {IoMdNotifications} from 'react-icons/io'

const Sidebar = ({ hamb, setHamb }) => {
  const nav = [
    {
      icon: <MdDashboardCustomize className="text-2xl mr-3 " />,
      link: "/dashboard",
      name: "Dashboard",
    },

    {
      icon: <MdOutlineProductionQuantityLimits className="text-2xl mr-3 " />,
      link: "/products",
      name: " Total Listed Products",
    },
    {
      icon: <MdMiscellaneousServices className="text-2xl mr-3 " />,
      link: "/total-services",
      name: " Total Service Types",
    },
    {
      icon: <MdMiscellaneousServices className="text-2xl mr-3 " />,
      link: "/services",
      name: " Total Services",
    },
    {
      icon: <MdMiscellaneousServices className="text-2xl mr-3 " />,
      link: "/periodicService",
      name: " Periodic Services",
    },
    {
      icon: <BsCardImage className="text-2xl mr-3  " />,
      link: "/gallary",
      name: "Banners",
    },
    {
      icon: <BiCategoryAlt className="text-2xl mr-3  " />,
      link: "/cat",
      name: "Category",
    },
    {
      icon: <TbBrandGoogleAnalytics className="text-2xl mr-3  " />,
      link: "/brand",
      name: "Brand",
    },
    {
      icon: <FaBloggerB className="text-2xl mr-3  " />,
      link: "/blog",
      name: "Blogs",
    },
    {
      icon: <MdSell className="text-2xl mr-3  " />,
      link: "/sellor",
      name: "Seller",
    },
    {
      icon: <FaUserAlt className="text-2xl mr-3  " />,
      link: "/user",
      name: "User",
    },
    {
      icon: <IoMdNotifications className="text-2xl mr-3  " />,
      link: "/notify",
      name: "Push Notification",
    },
    {
      icon: <MdPayment className="text-2xl mr-3  " />,
      link: "/detail",
      name: "Payment Detail",
    },
    {
      icon: <MdOutlineCategory className="text-2xl mr-3  " />,
      link: "/subCat",
      name: "Sub Categories",
    },
    {
      icon: <MdImageAspectRatio className="text-2xl mr-3  " />,
      link: "/testimon",
      name: "Testimonials",
    },
    {
      icon: <FaUserAlt className="text-2xl mr-3  " />,
      link: "/privacyPolicy",
      name: "Privacy Policy",
    },
    {
      icon: <FaUserAlt className="text-2xl mr-3  " />,
      link: "/termsandcondition",
      name: "Terms&Condition",
    },
    {
      icon: <FaUserAlt className="text-2xl mr-3  " />,
      link: "/support",
      name: "Help&Support",
    },
  ];
  const navigate = useNavigate();

  const log = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <aside className="p-4">
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
          <span className="font-bold text-[rgb(241,146,46)]">
            {/* <img src={image} className="h-24" /> */}
            <h2>Admin Panel</h2>
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="">
                <span className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm">
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => log()}
          >
            <BiLogOutCircle className="text-2xl mr-3  " /> LogOut
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

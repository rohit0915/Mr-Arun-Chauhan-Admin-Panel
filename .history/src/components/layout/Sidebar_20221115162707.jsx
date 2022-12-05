import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdPermDataSetting } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsCardImage  } from "react-icons/bs";
import { CgTerminal } from "react-icons/cg";
import { MdPrivacyTip, MdOutlineInfo } from "react-icons/md";
import { BiSupport, BiUser, BiRestaurant, BiCategoryAlt } from "react-icons/bi";
import { TbJewishStar } from "react-icons/tb";
import { GiKnightBanner } from "react-icons/gi";
import image from "../../../src/components/Assets/Logo.png";
import { BiLogOutCircle, BiPaperclip, BiMoney } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import {TbBrandGoogleAnalytics} from 'react-icons/tb'
import {FaBloggerB} from 'react-icons/fa'

import {
  MdDashboardCustomize,
  MdOutlineProductionQuantityLimits,
  MdOutlineCategory,
  MdOutlineNotifications,
  MdHistory,
} from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
  const nav = [
    // {
    //   icon: (
    //     <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/users",
    //   name: "Users",
    // },
    {
      icon: (
        <BiUser className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/manage-profiles ",
      name: "Manage Profiles",
    },
    // {
    //   icon: (
    //     <BiRestaurant className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/restaurants",
    //   name: "Restaurant",
    // },
    // {
    //   icon: (
    //     <BiDish className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/dishes",
    //   name: "Dishes",
    // },
    // {
    //   icon: (
    //     <AiFillProfile className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/profile",
    //   name: "Profile Update",
    // },
    // {
    //   icon: (
    //     <MdHistory className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/history",
    //   name: "History",
    // },
    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/upload",
      name: "Upload Services",
    },
    {
      icon: (
        <MdDashboardCustomize className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/accept-request-from-vendors",
      name: "Accept Request From Vendors",
    },
   
    {
      icon: (
        <MdOutlineProductionQuantityLimits className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/products",
      name: " Total Listed Products",
    },
    {
      icon: (
        <MdOutlineProductionQuantityLimits className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/total-services",
      name: " Total Services",
    },
    {
      icon: (
        <MdOutlineProductionQuantityLimits className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/sub-categories",
      name: " Sub Categories",
    },
    {
      icon: (
        <BsCardImage className="text-2xl mr-3  " />
      ),
      link: "/gallary",
      name: "Banners",
    },
    {
      icon: (
        <BiCategoryAlt className="text-2xl mr-3  " />
      ),
      link: "/cat",
      name: "Category",
    },
    {
      icon: (
        <TbBrandGoogleAnalytics className="text-2xl mr-3  " />
      ),
      link: "/brand",
      name: "Brand",
    },
    {
      icon: (
        <FaBloggerB className="text-2xl mr-3  " />
      ),
      link: "/blog",
      name: "Blogs",
    },
    {
      icon: (
        <MdOutlineProductionQuantityLimits className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/testimonials",
      name: "Testimonials",
    },
    {
      icon: (
        <MdPermDataSetting className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/daily-request",
      name: "Daily Request",
    },
    {
      icon: (
        <MdOutlineCategory className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/categories",
      name: "Category Details Manages",
    },
    {
      icon: (
        <GiKnightBanner className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/banners",
      name: "Banners",
    },
    // {
    //   icon: (
    //     <BsBorderWidth className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/orders",
    //   name: "Orders",
    // },
    // {
    //   icon: (
    //     <CgTerminal className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/terms",
    //   name: "Terms and Conditions",
    // },

    // {
    //   icon: (
    //     <MdPrivacyTip className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/privacyPolicy",
    //   name: "Privacy Policy",
    // },
    // {
    //   icon: (
    //     <BiSupport className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/support",
    //   name: "Help and Support ",
    // },
    // {
    //   icon: (
    //     <BiSupport className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendors",
    //   name: "Vendor manages system ",
    // },
    // {
    //   icon: (
    //     <BiPaperclip className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/coupons",
    //   name: "Coupons",
    // },
    // {
    //   icon: (
    //     <BiMoney className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/vendors",
    //   name: "Commission List",
    // },
    {
      icon: (
        <BiMoney className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/payments",
      name: "Payments/Transactions ",
    },
    {
      icon: (
        <MdPermDataSetting className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/setting",
      name: "Setting",
    },
    {
      icon: (
        <MdPermDataSetting className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
      ),
      link: "/complaints",
      name: "Complaints",
    },
    // {
    //   icon: (
    //     <MdOutlineInfo className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/about-us",
    //   name: "About Us",
    // },
    // {
    //   icon: (
    //     <BiLogOutCircle className="text-xl mr-3 rounded-full bg-[rgb(241,146,46)]" />
    //   ),
    //   link: "/",
    //   name: "Logout",
    // },
  ];
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
            <img src={image} className="h-24" />
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
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

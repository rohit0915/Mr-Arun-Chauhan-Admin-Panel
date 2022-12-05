/** @format */

import React, { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import auth from "../../Auth";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@mui/material";
import BaseUrl from "../../../../components/BaseUrl";


const product = [
  {
    name : 'Headphone' , 
    manufactuer : 'BoAt' , 
    color : 'blue' , 
    size : '' , 
    wieght : '' , 
    warranty : '1 Y' ,
    Price : '1000'
  }
]

const VendorProducts = () => {
  const [popup, setPopup] = useState(false);
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [cat, setCat] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [code, setCode] = useState();
  const [hsn, setHsn] = useState();
  const [gst, setGst] = useState();
  const [withoutGst, setWithoutGst] = useState();
  const [brand, setBrand] = useState();
  const [featuredDetails, setFeaturedDetails] = useState();
  const [policy, setPolicy] = useState();
  const [color, setColor] = useState();
  const [attributes, setAttributes] = useState();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        " https://pitzone-backend.herokuapp.com/api/product"
      );
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategory = async () => {
    try {
      const res = await axios.get(
        "https://pitzone-backend.herokuapp.com/api/category/get/category"
      );
      console.log("res", res);
      setCategory(res.data.categories);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();
    const url = BaseUrl() + "/product/add";

    const fd = new FormData();

    for (let pic of image) {
      fd.append("product_images", pic);
    }

    console.log("images", image);

    // fd.append("product_images", image);
    fd.append("category", cat);
    fd.append("title", title);
    fd.append("price", price);
    fd.append("description", desc);
    fd.append("product_information", info);
    fd.append("product_code", code);
    fd.append("product_hsn_code", hsn);
    fd.append("Tax_igst", gst);
    fd.append("Without_gst_price", withoutGst);
    fd.append("brand", brand);
    fd.append("featured_details", featuredDetails);
    fd.append("return_policy", policy);
    fd.append("color", color);
    fd.append("attributes", attributes);

    try {
      const res = await axios.post(url, fd, auth);
      console.log("resProduct", res);
      toast.success("Added Successfully");
    } catch (err) {
      console.log("err", err);
      toast.error("Please try again");
    } finally {
    }
  };

  const deleteProduct = async (id) => {
    try {
      const data = await axios.delete(
        ` https://pitzone-backend.herokuapp.com/api/product/${id}`
      );
      toast.success("Deleted Successfully");
      fetchData();
    } catch (err) {
      console.log("err", err);
      toast.error("Please try again");
    }
  };

  const handleProductPictures = (e) => {
    setImage([...image, e.target.files[0]]);
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Products
          </span>
          <button
            onClick={() => {
              setPopup(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-full bg-[rgb(240,72,88)] text-white tracking-wider"
          >
            Add Products
          </button>
        </div>
        <section
          className={
            popup
              ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
        >
          <div className="bg-slate-100 sm:h-[90vh] h-[80vh] overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span className=" font-semibold text-[rgb(240,72,88)] ">
                Add Products
              </span>
              <div className="text-[rgb(240,72,88)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                <IoMdClose
                  onClick={() => {
                    setEdit("");
                    setPopup(false);
                  }}
                />{" "}
              </div>
            </div>
            {/* form */}

            <form
              className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4"
              onSubmit={edit ? "" : addProduct}
            >
              {image.length > 0
                ? image.map((pic, index) => <div key={index}>{pic.name}</div>)
                : null}
              {/*  Image */}
              <div className="inline-flex  w-full flex-col">
                <label htmlFor="img" className="cursor-pointer">
                  Image
                </label>
                <input
                  id="img"
                  required
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleProductPictures}
                  className=" text-gray-800 tracking-wider bg-white text-sm rounded-full px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              {/*  Name */}
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Products Name*
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={edit ? edit.title : title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Info
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Code
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Product Hsn
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={hsn}
                  onChange={(e) => setHsn(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Gst
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={gst}
                  onChange={(e) => setGst(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Without Gst Price
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={withoutGst}
                  onChange={(e) => setWithoutGst(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Brand
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Featured Details
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={featuredDetails}
                  onChange={(e) => setFeaturedDetails(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Policy
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={policy}
                  onChange={(e) => setPolicy(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Color
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Attributes
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={attributes}
                  onChange={(e) => setAttributes(e.target.value)}
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>
              {/*  price */}
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="price"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Price*
                </label>
                <input
                  value={edit ? edit.price : price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="price"
                  required
                  type="text"
                  name="price"
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>

              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="price"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Description
                </label>
                <input
                  value={edit ? edit.desc : desc}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                  type="text"
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                />
              </div>

              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="price"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Category
                </label>
                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  required
                  type="text"
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(240,72,88)]"
                >
                  <option>--Select--</option>
                  {category?.map((item) => {
                    return (
                      <>
                        <option value={item._id}>{item.category}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <button
                type="submit"
                value="Add"
                className="bg-[rgb(240,72,88)] cursor-pointer w-40 hover:bg-[rgb(240,72,88)] py-1 rounded-full"
              >
                Add
              </button>
            </form>
          </div>
        </section>

        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 w-36 tracking-widest font-medium md:text-base text-sm rounded-tl-lg ">
                  <AiFillCamera className="text-2xl" />
                </th>

                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Manufacturer
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Color
                </th>

                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Size
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Weight
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Warranty
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Price
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Description
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Brand
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.data?.map((i, index) => (
                <tr key={i} className="tracking-wider text-gray-900 ">
                  <td className="px-4 py-3 md:text-base text-sm">
                    <Carousel
                      autoPlay
                      infiniteLoop
                      width="100%"
                      showThumbs={false}
                    >
                      {i.productImg?.map((g, index) => (
                        <div key={index}>
                          <img
                            alt="Product"
                            src={
                              g.url
                                ? g.url
                                : "https://static7.depositphotos.com/1003098/699/i/600/depositphotos_6993693-stock-photo-happy-young-girl-using-cell.jpg"
                            }
                            style={{ width: "100%", height: "100px" }}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.productName}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.manufactuer}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">{i.color}</td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.size_of_packaing}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.weight_of_packaged_item}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.warrenty}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">{i.price}</td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.descrption}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.brand === null ? "Brand" : i.brand}
                  </td>
                  <td
                    className="px-4 py-3 md:text-base text-sm "
                    style={{ display: "flex", gap: "10px", marginTop: "20px" }}
                  >
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => deleteProduct(i._id)}
                    >
                      Delete
                    </Button>
                    <Button variant="outlined">Edit</Button>
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

export default HOC(VendorProducts);

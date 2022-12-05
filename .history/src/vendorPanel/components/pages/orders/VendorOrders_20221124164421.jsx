/** @format */

import HOC from "../../layout/HOC";
import { AiFillDelete, AiFillEdit ,AiOutlineClose } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";


const Orders = [
  {
    user: "User1",
    product: "Product",
    Phone: 456317890,
    Address: "delhi",
    sp: 450,
    discount: 54,
    tp: 4545,
    deliverd: "Yes",
    payment: "Yes",
  },
  {
    user: "User1",
    product: "Product",
    Phone: 456317890,
    Address: "delhi",
    sp: 450,
    discount: 54,
    tp: 4545,
    deliverd: "Yes",
    payment: "Yes",
  },
  {
    user: "User1",
    product: "Product",
    Phone: 456317890,
    Address: "delhi",
    sp: 450,
    discount: 54,
    tp: 4545,
    deliverd: "Yes",
    payment: "Yes",
  },
  {
    user: "User1",
    product: "Product",
    Phone: 456317890,
    Address: "delhi",
    sp: 450,
    discount: 54,
    tp: 4545,
    deliverd: "Yes",
    payment: "Yes",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  minHeight: 400,
  p: 2,
  border: "1px solid #ccc",
  boxShadow: 50,
};


const VendorOrders = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Orders
          </span>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AiOutlineClose
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => handleClose()}
              className="text-4xl"
            />
            <form className="mt-14" >
              <label>Image</label>
              <input
              required
                type={"file"}
                onChange={(e) => setImage(e.target.files[0])}
              />
              <br />

              <Button variant="contained" color="success" type="submit">
                Success
              </Button>
            </form>
          </Box>
        </Modal>



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
                  Total Price
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Delivered
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Payment
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {Orders.map((i, index) => (
                <tr key={index} className="tracking-wider text-gray-900 ">
                  <td className="px-4 py-3 md:text-base text-sm">{i.user}</td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.product}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">{i.Phone}</td>
                  <td className="px-4 py-3 md:text-base text-sm">
                    {i.Address}
                  </td>
                  <td className="px-4 py-3 md:text-base text-sm">{i.sp}</td>
                  <td className="px-4 py-3  space-x-3">{i.discount}</td>
                  <td className="px-4 py-3 md:text-base text-sm">{i.tp} </td>

                  <td className="px-4 py-3  space-x-3">{i.deliverd}</td>
                  <td className="px-4 py-3  space-x-3">{i.payment}</td>
                  <td className="px-4 py-3  space-x-3">
                    <div style={{ display: "flex", gap: "10px" }}>
                      <AiFillDelete color="red" />
                      <AiFillEdit color="blue" />
                    </div>
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

export default HOC(VendorOrders);

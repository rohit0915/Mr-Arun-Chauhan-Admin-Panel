import HOC from "../../layout/HOC";
import { AiFillDelete, AiFillEdit, AiOutlineClose } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";

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

const pay = [
  {
    user: "User1",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Pending",
    Amount: 5000,
  },
  {
    user: "User2",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Success",
    Amount: 10000,
  },
  {
    user: "User3",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Success",
    Amount: 500000,
  },
  {
    user: "User4",
    phone: 1234567890,
    date: "12/01/2022",
    status: "Pending",
    Amount: 5000,
  },
];

const VendorPayment = () => {
  return (
    <>
      <div>
        {/* <span className="bg-[rgb(240,72,88)] w-sm"> */}
        {/* <section> */}
        {/* <h1 className="shaadow-sm bg-gray-400 font-bold text-black mt-5 p-3 rounded-full text-center">
            Add Credit/Debit card
          </h1>
        </span> */}
        {/* <form className="shaadow-sm bg-white font-bold text-black mt-5 p-3 rounded-full text-center"> */}
        {/* <div className="shaadow-sm bg-white font-bold text-black mt-5 p-3 rounded-full text-center">
          <span class="shaadow-sm bg-[rgb(240,72,88)] font-bold text-black mt-5 p-3 rounded-full text-center">
            <label
              for="card number"
              className="d- flex justify-content-between"
            >
              CARD NUMBER:
            </label>
            <input
              className="form-control inputtxt"
              placeholder="8888 7777 4444 5555"
              type="number"
              name="number"
              id="floatingInput"
              aria-describedby="emailHelp"
            />
          </span>
        </div> */}
        {/* <div className="px-3 pt-3 pb-3 ">
            <span className=" shaadow-sm bg-gray-400 font-bold text-black mt-5 p-3 rounded-full text-center">
              <label
                For="card number"
                className="d-flex justify-content-between"
              >
                CARD NUMBER:
              </label>
              <input
                type="anything"
                name="number"
                className="form-control inputtxt rounded-full"
                placeholder=" 2525 6565 8787 2772"
              />
            </span>
          </div> */}

        {/* <div className=" px-3 pt-7 pb-3 ">
            <span className=" shaadow-sm bg-gray-400 font-bold text-black mt-5 p-3 rounded-full text-center">
              <label
                For="card number"
                className="d-flex justify-content-between"
              >
                EXPIRY DATE:
              </label>
              <input
                type="anything"
                name="number"
                className="form-control inputtxt rounded-full"
                placeholder=" MM/YY"
              />
            </span> */}
        {/* </div>
          <div className=" px-3 pt-7 pb-3 ">
            <span className=" shaadow-sm bg-gray-400 font-bold text-black mt-5 p-3 rounded-full text-center">
              <label
                For="card number"
                className="d-flex justify-content-between"
              >
                SECURIY CODE:
              </label>
              <input
                type="anything"
                name="number"
                className="form-control inputtxt rounded-full"
                placeholder="CVV/CCV"
              />
            </span>
          </div>

          <div className="shaadow-sm bg-white font-bold text-black mt-5 p-3 rounded-full text-center">
            <span class="shaadow-sm bg-gray-400 font-bold text-black mt-5 p-3 rounded-full text-center">
              <label>FIRST NAME: </label>
              <input
                className="rounded-full"
                type="text"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </span>
          </div>

          <div className="shaadow-sm bg-white font-bold text-black mt-5 p-3 rounded-full text-center">
            <span class="shaadow-sm bg-gray-400 font-bold text-black mt-5 p-3 rounded-full text-center">
              <label>LAST NAME: </label>
              <input
                className="rounded-full "
                type="text"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </span>
          </div> */}
        {/* <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div> */}
        {/* <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        {/* <div class="form-check form-switch mt-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDisabled"
              disabled
            />
            <label class="form-check-label" for="flexSwitchCheckDisabled">
              You can remove this card
            </label>
          </div>
          <div className="pt-5 ">
            <button
              type="submit"
              class="btn btn-primary px-4 pt-2 pb-2 bg-[rgb(240,72,88)] rounded-full"
            >
              SUBMIT
            </button>
          </div>
        </form> */}
        {/* </section> */}
        <div class="container">
          <button
            type="button"
            className="d-flex justify-content-center font-small px-10 mt-20 btn btn-info btn-lg bg-[rgb(240,72,88)] rounded-full"
            data-toggle="modal"
            data-target="#myModal"
          >
            Add Credit/Debit card
          </button>

          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                  ></button>
                  <h4 class="modal-title">Add credit/debit card</h4>
                </div>
                <div class="modal-body">
                  {/* <div className="shaadow-sm bg-white font-bold text-black mt-5 p-3 rounded-full text-center"> */}
                  <span class="shaadow-sm  font-bold text-black mt-5 p-3 rounded-full text-center">
                    <label
                      for="card number"
                      className="d- flex justify-content-between"
                    >
                      CARD NUMBER:
                    </label>
                    <input
                      className="form-control inputtxt rounded-full"
                      placeholder="8888 7777 4444 5555"
                      type="number"
                      name="number"
                      id="floatingInput"
                      aria-describedby="emailHelp"
                    />
                  </span>
                  {/* </div> */}
                  <span className=" shaadow-sm font-bold text-black mt-4 pt-3 rounded-full text-center">
                    <label
                      For="card number"
                      className="d-flex justify-content-between"
                    >
                      EXPIRY DATE:
                    </label>
                    <input
                      type="anything"
                      name="number"
                      className="form-control inputtxt rounded-full"
                      placeholder=" MM/YY"
                    />
                  </span>
                  <span className=" shaadow-sm font-bold text-black mt-4 pt-3 rounded-full text-center">
                    <label
                      For="card number"
                      className="d-flex justify-content-between"
                    >
                      SECURITY CODE:
                    </label>
                    <input
                      type="anything"
                      name="number"
                      className="form-control inputtxt rounded-full"
                      placeholder=" CCV/CVV"
                    />
                  </span>
                  {/* <div className="shaadow-sm font-bold text-black mt-5 p-3 rounded-full text-center"> */}
                  <span class="shaadow-sm  font-bold text-black p-3 rounded-full text-center">
                    <label
                      for="card number"
                      className="d- flex justify-content-between"
                    >
                      FIRST NAME:
                    </label>
                    <input
                      className="form-control inputtxt rounded-full"
                      placeholder=""
                      type="text"
                      name="number"
                      id="floatingInput"
                      aria-describedby="emailHelp"
                    />
                  </span>
                  <div>
                    <span class="shaadow-sm  mt-2 font-bold text-black p-3 rounded-full text-center">
                      <label
                        for="card number"
                        className="d- flex justify-content-between"
                      >
                        LAST NAME:
                      </label>
                      <input
                        className="form-control inputtxt rounded-full"
                        placeholder=""
                        type="text"
                        name="number"
                        id="floatingInput"
                        aria-describedby="emailHelp"
                      />
                    </span>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        You can remove your card
                      </label>
                    </div>
                    <button
                      type="submit"
                      className=" d-flex justify-content-between btn-primary font-bold mt-4 px-4 pt-2 pb-2 bg-[rgb(240,72,88)] rounded-full"
                    >
                      SUBMIT
                    </button>
                  </div>
                  {/* </div> */}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default (VendorPayment);

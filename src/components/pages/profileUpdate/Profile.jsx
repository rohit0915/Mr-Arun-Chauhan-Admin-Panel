import React from "react";
// import { Diologue } from "primereact/diologue";
// import { Button } from "primereact/diologue";
import image from "../../../assets/profile_update.png";
import HOC from "../../layout/HOC";

const Profile = () => {
  return (
    <div className="container mb-3 justify-center flex align-item-center">
      <div className=" w-full h-screen flex flex-col justify-center items-center ">
        <div className="col-lg-6">
          <form>
            <div className="form-floating mb-3">
              <span className="text-2xl font-bold text-center text-[rgb(240,72,88)] ml-20">
                <img
                  src={image}
                  alt=""
                  className=" image h-48 flex flex-col justify-center items-center rounded-full mb-20 ml-80"
                />
              </span>
            </div>
            <div className="form-floating mb-3">
              <input
                type="Name"
                name="Name"
                id="Name"
                className="form-control lg:w-5/6 mx-auto rounded-full"
                placeholder="Name"
              />
              <label For="Name"></label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="Email"
                name="Email"
                id="Email"
                className="form-control lg:w-5/6 mx-auto rounded-full"
                placeholder="Email"
              />
              <label For="Email"></label>
            </div>
            <div className="form-floating mb-3 rounded-full">
              <input
                type="number"
                name="number"
                id="number"
                className="form-control lg:w-5/6 mx-auto rounded-full"
                placeholder="Mobile Number "
              />
              <label For="number"></label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="Text"
                name="Text"
                id="text"
                className="form-control lg:w-5/6 mx-auto rounded-full"
                placeholder="Address"
              />
              <label For="Text"></label>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-danger rounded-full bg-[rgb(240,72,88)] lg:w-5/6 mx-auto ml-20"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HOC(Profile);

/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import "./notify.css";

const Notify = () => {
  return (
    <>
      <h1>Push Notification</h1>

      <div className="sendMsg">
        <form>
          <textarea placeholder="Write your message here" />
        </form>
      </div>
    </>
  );
};

export default HOC(Notify);

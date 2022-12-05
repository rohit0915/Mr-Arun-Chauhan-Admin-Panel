import React from 'react'
import HOC from '../../layout/HOC'

const VendorNotify = () => {
  return (
   <>
      <h1 id="sendMsghead">Push Notification</h1>

<div className="sendMsg">
  <form>
    <textarea placeholder="Write your message here" />
    <br />
    <button id="sendMsgBtn">Submit</button>
  </form>
</div>
   </>
  )
}

export default HOC(VendorNotify)
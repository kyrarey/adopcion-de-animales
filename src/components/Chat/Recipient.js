import React from "react";
import "./Chat.css";

const Recipient = ({ recipient }) => {
  return (
    <div className="chat_list active_chat">
      <div className="chat_people">
        <div className="chat_ib">
          <h5>{recipient.foundation} </h5>
          {/* <span className="chat_date">Dec 25</span></h5> */}
          {/* <p>Test, which is a new approach to have all solutions */}
          {/* astrology under one roof.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Recipient;

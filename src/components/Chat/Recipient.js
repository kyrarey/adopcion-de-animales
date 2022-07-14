import React, { useState } from "react";
import "./Chat.css";
import axios from "axios";
import ChatRoom from "./ChatRoom";

const Recipient = ({ recipient }) => {
  const [value, setValue] = useState([]);

  const onClick = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:3030/chat/${recipient.foundation}`, {
        user: recipient.user,
        foundation: recipient.foundation,
        content: recipient.content,
      })
      .then((res) => setValue(res.data));
  };

  console.log(value, "valuee")

  return (
    <>
      <div className="chat_list active_chat" onClick={onClick}>
        <div className="chat_people">
          <div className="chat_ib">
            <h5>{recipient.foundation} </h5>
            {/* <span className="chat_date">Dec 25</span></h5> */}
            {/* <p>Test, which is a new approach to have all solutions */}
            {/* astrology under one roof.</p> */}
          </div>
        </div>
      </div>
      <ChatRoom element={value} />
    </>
  );
};

export default Recipient;

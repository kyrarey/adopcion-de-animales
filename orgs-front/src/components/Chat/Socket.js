import SocketIoClient from "socket.io-client";
import { useEffect, useState } from "react";
import "./Chat.css"
import axios from "axios";
import {useParams} from "react-router-dom"

const Socket = () => {
  const [recipient, setRecipient] = useState([]);
  const [value, setValue] = useState();
  const [oldMessages, setOldMessages] = useState([]);
  const [click, setClick] = useState({});
  const [chatRoom, setChatRoom] = useState([]);
 
  const foundationId = useParams().foundationId

  const socket = SocketIoClient("http://localhost:3030/");

  console.log("test")

  useEffect(() => {
    socket.emit("Connect");
    socket.on("load chats", (data) => {
      setRecipient(data);
    });
  },[]);

  let activeChats= []
  activeChats = recipient.filter((chat) => chat.foundation === foundationId)

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("send message", value);    
    axios.post(`http://localhost:3030/chat/update/${click.foundation}`,{
      user: click.user,
      foundation: click.foundation,
      content: {sender:"foundation", message:value},
    });
  };

  //no hace un loop infinito
  useEffect(() => {
    setOldMessages("")
    axios
      .get(`http://localhost:3030/chat/${click.foundation}`, {
        user: click.user,
        foundation: click.foundation,
        content: click.content,
      })
      .then((res) => setChatRoom(res.data));
  }, [click]);


  useEffect(() => {
    socket.on("new message", function (data) {
      setOldMessages([...oldMessages, data]);
    });
    return () => {
      socket.off()}
    }, [oldMessages]);

  return (
    <div>
      <div className="messaging">
        <div className="inbox_msg">
          <div className="inbox_people">
            <div className="headind_srch">
              <div className="recent_heading">
                <h4>Recent</h4>
              </div>
            </div>
            <div className="inbox_chat scroll">
              {activeChats.map((activeChats) => (
                <div
                  className="chat_list active_chat"
                  onClick={() => setClick(activeChats)}
                >
                  <div className="chat_people">
                    <div className="chat_ib">
                      <h5>{activeChats.user} </h5>
                      {/* <span className="chat_date">Dec 25</span></h5> */}
                      {/* <p>Test, which is a new approach to have all solutions */}
                      {/* astrology under one roof.</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="mesgs">
              <div className="msg_history">
                {chatRoom[0] ? (
                  chatRoom[0].content.map((message) => {
                    if (message.sender === "foundation") {
                      return(
                      <div className="sent_msg">
                        <p>
                          {message.message}
                          <br />
                        </p>
                      </div>)
                    } else {return (
                      <div className="outgoing_msg">
                        <p>{message.message}</p>
                      </div>)
                    }
                  })
                ) : (
                  <></>
                )}
                {oldMessages ? oldMessages.map((message) => (
                  <div className="sent_msg">
                  <p>
                    {message}
                    <br />
                  </p>
                </div>
              )): <></>}
                {/* <div className="outgoing_msg">
    <div className="sent_msg">
      <p>Apollo University, Delhi, India Test</p>
      <span className="time_date"> 11:01 AM | Today</span>{" "}
    </div>
  </div>
  <div className="incoming_msg">
    <div className="received_msg">
      <div className="received_withd_msg">
        <p>
          We work directly with our designers and suppliers, and
          sell direct to you, which means quality, exclusive
          products, at a price anyone can afford.
        </p>
        <span className="time_date"> 11:01 AM | Today</span>
      </div>
    </div> */}
                {/* </div> */}
              </div>
              <div className="type_msg">
                <div className="input_msg_write">
                  <input
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    className="write_msg"
                    placeholder="Type a message"
                  />
                  <button className="msg_send_btn" type="button">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Socket;

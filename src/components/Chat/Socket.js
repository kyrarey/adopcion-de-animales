import SocketIoClient from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Recipient from "./Recipient";
import axios from "axios";
import { useParams } from "react-router-dom";

const Socket = () => {
  const [recipient, setRecipient] = useState([]);
  const [value, setValue] = useState();
  const [oldMessages, setOldMessages] = useState([]);
  const [click, setClick] = useState({});
  const [chatRoom, setChatRoom] = useState([]);
  const [allFoundations, setAllFoundations] = useState([]);

  const [formState, setFormState] = useState("");

  const userId = useParams().userId;
  const socket = SocketIoClient("http://localhost:3030/");

  const onReset = () => {
    setFormState();
  };

  useEffect(() => {
    socket.emit("Connect");
    socket.on("load chats", (data) => {
      //conseguimos todos los chats que hay en la db
      setRecipient(data);
    });

    //get de all foundations para despues filtrar
    // axios
    //   .get(`http://localhost:3030/orgs/all`)
    //   .then((res) => setAllFoundations(res.data));
  }, []);


  //filtrado de todos los chats por los chats de cada user
  let activeChats = [];
  activeChats = recipient.filter((chat) => chat.user === userId);
  console.log(activeChats, "active chats")

  //traigo el objeto de toda la fundacion para las conversaciones que hay
  // let activeFoundations = [];
  // activeFoundations = allFoundations.filter((foundation) => {
  //   for (let i = 0; i < recipient.length; i++) {
  //     if(foundation._id==recipient[i].foundation)
  //       return foundation
  //   }
  // });
  // console.log(activeFoundations, "Active foundations")
  // 
  
  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("send message", value);
    axios.post(`http://localhost:3030/chat/update/${click.user}`, {
      user: click.user,
      foundation: click.foundation,
      content: { sender: "user", message: value },
    });

  };

  //no hace un loop infinito
  useEffect(() => {
    setOldMessages("");
    axios
      .get(`http://localhost:3030/chat/${click.foundation}`, {
        user: click.user,
        foundation: click.foundation,
        content: click.content,
      })
      .then((res) => setChatRoom(res.data));
  }, [click]);

  // console.log(chatRoom, "chatroom")
  console.log(oldMessages, "oldm")
  // console.log(recipient, "recipient")
  // console.log(chatRoom, "room")

  useEffect(() => {
    socket.on("new message", function (data) {
      setOldMessages([...oldMessages, data])
      // setOldMessages(...oldMessages,[{sender:"user", messages : data}]);
    });
    setValue("")
    return () => {
      socket.off();
    };
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
                      <h5>{activeChats.foundationName
                      // activeFoundations.map((foundation)=>{
                      //   if(foundation._id === activeChats.foundation)
                      //     return foundation.foundationName
                      // })
                      } </h5>
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
                    if (message.sender === "user") {
                      return (
                        <div className="sent_msg">
                          <p>
                            {message.message}
                            <br />
                          </p>
                        </div>
                      );
                    } else {
                      return (
                        <div className="outgoing_msg">
                          <p>{message.message}</p>
                        </div>
                      );
                    }
                  })
                ) : (
                  <></>
                )}
                {oldMessages ? 
                  oldMessages.map((message) => (
                    <div className="sent_msg">
                           <p>
                             {message}
                             <br />
                           </p>
                         </div>
                    // if (message.sender === "user") {
                    //   return (
                    //     <div className="sent_msg">
                    //       <p>
                    //         {message.messages}
                    //         <br />
                    //       </p>
                    //     </div>
                    //   );
                    // } else {
                    //   return (
                    //     <div className="outgoing_msg">
                    //       <p>{message.messages}</p>
                    //     </div>
                    //   );
                    // }
                  )
                ) : (
                  <></>
                )}
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
                    value={value}
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

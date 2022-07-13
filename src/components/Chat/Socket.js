import SocketIoClient from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Recipient from "./Recipient";

const Socket = () => {
  const [response, setResponse] = useState([]);
  const [value, setValue] = useState();
  const [oldMessages, setOldMessages] = useState([]);
  const socket = SocketIoClient("http://localhost:3030/");
  // const socket = io("http://localhost:3030")
  useEffect(() => {
    socket.emit("Connect");
  }, []);

  const onClick = () => {
    //CARGAR EL CHAT PEDIDO
  };

  const onChange = (e) => {
    e.preventDefault();
    setValue(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("send message", value);
    //CARGAR EL CHAT PEDIDO
  };
  useEffect(() => {
    socket.on("new message", function (data) {
      console.log("entra en newmessage del front", data);
      setOldMessages([...oldMessages, data]);
    });

    return () => {
      socket.off();
    };
  }, [oldMessages]);

  console.log(oldMessages, "oldMessages");

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
            <div className="inbox_chat scroll" onClick={onClick}>
              {response.map((recipient) => (
                <Recipient recipient={recipient} />
              ))}
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="mesgs">
              <div className="msg_history">
                {oldMessages.map((message) => (
                  <div className="sent_msg">
                    <p>{message}</p>
                  </div>
                ))}
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
                    // name="value"
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

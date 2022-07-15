import React,{useState, useEffect} from "react";
import SocketIoClient from "socket.io-client";
import "./Chat.css";

const ChatRoom = ({element}) => {

    console.log(element)
    const [value, setValue] = useState();
    const [oldMessages, setOldMessages] = useState([]);
    const socket = SocketIoClient("http://localhost:3030/");

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

  return (
    <>
     
    </>
  );
};

export default ChatRoom;

import SocketIoClient from 'socket.io-client'
import { useState } from 'react'
import Chat from './Chat'

const Socket = () => {
    const [response, setResponse] = useState([])

    // const socket = io("http://localhost:3030")

    const socket = SocketIoClient('http://localhost:3030/')
    socket.on("Connect", (data) => {
        setResponse(data)
    })

    return (
        <div>
            {response.map((element)=><Chat element={element} />)}
            
        </div>
    )
}

export default Socket

import SocketIoClient from 'socket.io-client'
import { useState } from 'react'

const Socket = () => {
    const [response, setResponse] = useState({})

    // const socket = io("http://localhost:3030")

    const socket = SocketIoClient('http://localhost:3030')
    socket.on("FromApi", (data) => {
        setResponse(data)
    })


    return (
        <div>
            <h1>{response}</h1>
        </div>
    )
}

export default Socket

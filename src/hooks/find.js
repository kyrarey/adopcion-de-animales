//Función que hace u  pedido get al server http://localhost:8080/api, con cualquier ruta deseada pasada como path

import axios from "axios";

async function find(path) {
    const res = await axios
        .get(`http://localhost:8080/api${path}`);
    return res.data;
}

export default find;
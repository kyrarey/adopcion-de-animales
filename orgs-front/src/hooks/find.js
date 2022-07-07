//Función que hace u  pedido get al server http://localhost:3030/, con cualquier ruta deseada pasada como path
//Ej: Pedido get a la animals: find("/animal")
import axios from "axios";

async function find(path) {
    const res = await axios
        .get(`http://localhost:3005${path}`);
    return res.data;
}

export default find;
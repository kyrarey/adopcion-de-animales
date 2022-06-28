const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser:true,
  useUNifiedTopology: true,
}

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/AnimalesFelices", connectionParams);
  console.log("Conectado a mongoDB");
}

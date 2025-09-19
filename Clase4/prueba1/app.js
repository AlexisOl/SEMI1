const express = require("express");
const cors = require("cors");
const PUERTO = 3001;

const app = express();

app.use(cors());
app.use(express.json());


app.use("/", (req, res) => 
  res.json({"mensaje": "saludos de ss1"}) );



//primero se conecta a redis
app.listen(PUERTO, () => {
  console.log(`La aplicación está escuchando en http://localhost:${PUERTO}`);
});
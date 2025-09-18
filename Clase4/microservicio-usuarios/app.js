const express = require("express");
const cors = require("cors");
const PUERTO = process.env.PORT || 3212;
const rutas = require('./routes/rutas.routes');


const app = express();

app.use(cors({
  origin: [
    'http://alexxusprueba.s3-website-us-east-1.amazonaws.com',
    'http://clase2semi12025.s3-website-us-east-1.amazonaws.com', 
    'http://localhost:4200',
  ],
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));
app.use(express.json());


app.use("/", rutas);



//primero se conecta a redis
app.listen(PUERTO, () => {
  console.log(`La aplicación está escuchando en http://localhost:${PUERTO}`);
});
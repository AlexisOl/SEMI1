const express = require("express");
const cors = require("cors");
const PUERTO = process.env.PORT || 3210;
const rutas = require('./routes/rutas.routes');
const rutasPoemas = require('./routes/poemas.routes');

const {conectar} = require('./Config/Valkey')

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

app.use("/", rutas);
app.use("/v1", rutasPoemas);
app.use(express.json());


//primero se conecta a redis
conectar().then(() => {
app.listen(PUERTO, () => {
  console.log(`La aplicación está escuchando en http://localhost:${PUERTO}`);
});
})
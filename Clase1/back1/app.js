const express = require("express")
const cors = require("cors")
const PUERTO = process.env.PORT || 3210 
const rutas = require('./routes/rutas.routes')


const app = express();




app.use("/rutas", rutas)



app.use(cors())
app.use(express.json())



app.listen(PUERTO, () => {
    console.log(`La aplicación está escuchando en http://localhost:${PUERTO}`);
})


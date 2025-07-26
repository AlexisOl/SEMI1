const express = require("express")
const cors = require("cors")
const PUERTO = process.env.PORT || 3210 



const app = express();




app.use("/rutas")



app.use(cors())
app.use(express.json())






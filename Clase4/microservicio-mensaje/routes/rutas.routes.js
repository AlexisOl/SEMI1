const express = require("express") 
const router = express.Router() 
const mensajeController = require("../controller/MensajeController") 


router.get("/ping", mensajeController.ping) 
router.post("/", mensajeController.registro) 
router.get("/", mensajeController.obtenerTodo)

module.exports = router

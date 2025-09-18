const express = require("express") 
const router = express.Router() 
const mensajeController = require("../controller/MensajeController") 


router.get("/ping", mensajeController.ping) 
router.post("/", mensajeController.obtenerTodo) 
router.get("/", mensajeController.registro)

module.exports = router

const express = require("express")
const router = express.Router()
const saludosController = require("../controller/saludoController")

router.get("/", saludosController.general)

router.get("/hola", saludosController.saludo)



module.exports = router
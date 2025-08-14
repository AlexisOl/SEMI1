const express = require("express")
const router = express.Router()
const poetasController = require("../controller/poetasController")

router.get("/", poetasController.listar)




module.exports = router
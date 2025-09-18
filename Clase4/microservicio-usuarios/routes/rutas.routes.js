

const express = require("express") 
const router = express.Router() 
const usuarioController = require("../controller/usuarioController") 
router.get("/ping", usuarioController.ping)
 router.post("/", usuarioController.obtenerTodo)
  router.get("/", usuarioController.registro)
  router.get("/:id", usuarioController.existeUsuario);
  
module.exports = router
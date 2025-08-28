const express = require("express");
const router = express.Router();
const PoetaController = require("../controller/poetasController");
const PoemasController = require("../controller/poemaController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", PoetaController.listar.bind(PoetaController));
router.post("/", upload.single('file'), PoetaController.crearPoeta.bind(PoetaController));
router.post("/cargar", upload.single('file'), PoetaController.cargar.bind(PoetaController));

//poemas
router.get("/poemas", PoemasController.crearPoesia);

module.exports = router;

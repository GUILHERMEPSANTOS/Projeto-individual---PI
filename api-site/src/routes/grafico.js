var express = require("express");
var router = express.Router();



var graficoController = require("../controllers/graficoController")

router.get("/", function (req, res) {
   graficoController.listar(req,res);
});
//router é o nome do arquivo
module.exports = router;
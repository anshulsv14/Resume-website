const express = require("express")
const route = express.Router();
const empController = require("../controllers/controller")

route.post("/insertdata" , empController.dataSave )
route.get("/displaydata" , empController.dataDisplay )



module.exports = route;
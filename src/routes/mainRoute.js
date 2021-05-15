const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/users", mainController.listMongo);
router.get("/users/:id", mainController.find);
router.post("/users/create", mainController.create);

module.exports = router;

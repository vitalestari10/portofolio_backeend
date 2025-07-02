const express = require("express");
const router = express.Router();
const { sendMessage, getAllMessages } = require("../controllers/contactController");

router.post("/", sendMessage);
router.get("/", getAllMessages); // <- tambahkan ini

module.exports = router;

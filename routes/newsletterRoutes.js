const express = require("express");
const newsletter = require("../controllers/newsLetterController");

const router = express.Router();

router.post("/newsletter", newsletter);

module.exports = router;

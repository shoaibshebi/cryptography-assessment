const express = require("express");
const router = express.Router();
const { getHash } = require("../Controllers/getHashController");

router.post("/getHash", getHash);

module.exports = router;

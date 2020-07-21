const express = require("express");
const router = express.Router();
const { createPdf, fetchPdf } = require("../controllers/createPdf");

router.post("/create", createPdf);
router.get("/fetch", fetchPdf);

module.exports = router;

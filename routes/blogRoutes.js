const express = require("express");

const { getallblog, createblog, deleteblog } = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", getallblog);
router.post("/create", createblog);
router.post("/delete/:id", deleteblog);

module.exports = router;
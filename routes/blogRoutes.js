const express = require("express");

const { getAllBlog, createBlog, deleteBlog } = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", getAllBlog);
router.post("/create", createBlog);
router.post("/delete/:id", deleteBlog);

module.exports = router;
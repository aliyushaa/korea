const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname+"/views/home.ejs"))
    .post((req, res) => res.send("POST HOME"));
module.exports = router;
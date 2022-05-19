const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname+"/views/index.ejs"))
    .post((req, res) => res.send("POST INDEX"));
module.exports = router;
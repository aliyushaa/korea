const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname+"/views/authorization.ejs"))
    .post((req, res) => res.send("POST AUTHORIZATION"));
module.exports = router;
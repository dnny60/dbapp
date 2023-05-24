var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
router.get("/", function (req, res, next) {
  res.render("home");
});

module.exports = router;

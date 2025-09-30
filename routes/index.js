var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Trouve ton artisan !" });
});

/* Pages légales */
router.get("/mentions-legales", function (req, res, next) {
  res.render("mentions-legales", {
    title: "Mentions légales - Trouve ton artisan !",
  });
});

router.get("/donnees-personnelles", function (req, res, next) {
  res.render("donnees-personnelles", {
    title: "Données personnelles - Trouve ton artisan !",
  });
});

router.get("/accessibilite", function (req, res, next) {
  res.render("accessibilite", {
    title: "Accessibilité - Trouve ton artisan !",
  });
});

router.get("/cookies", function (req, res, next) {
  res.render("cookies", { title: "Cookies - Trouve ton artisan !" });
});

module.exports = router;

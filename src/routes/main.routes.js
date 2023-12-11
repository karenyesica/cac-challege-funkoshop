const express = require("express");
const router = express.Router();

const {
  homeView,
  contact,
  about,
  faqs,
} = require("../controllers/main.controller");

router.get("/", homeView);
router.get("/home", homeView);
router.get("/contact", contact);
router.get("/about", about);
router.get("/faqs", faqs);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  loginView,
  doLogin,
  registerView,
  doRegister,
  logoutView,
} = require("../controllers/auth.controller");

router.get("/login", loginView);
router.post("/login", doLogin);
router.get("/register", registerView);
router.post("/register", doRegister);
router.get("/logout", logoutView);

module.exports = router;

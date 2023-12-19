const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadFiles");

const {
  adminView,
  createView,
  createItem,
  editView,
  editItem,
  deleteItem,
} = require("../controllers/admin.controller");

const isLogged = (req, res, next) => {
  if (req.session.isLogged) {
    next();
  } else {
    return res
      .status(401)
      .send("Debes estar logueado para ingresar a esta vista");
  }
};

router.get("/", isLogged, adminView);
router.get("/create", isLogged, createView);
router.post("/create", upload.array("productImages", 2), createItem);
router.get("/edit/:id", isLogged, editView);
router.put("/edit/:id", upload.array("productImages", 2), editItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;

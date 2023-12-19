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

const logged = (req, res, next) => {
  if (req.session.logged) {
    next();
  } else {
    return res
      .status(401)
      .send("Debes estar logueado para ingresar a esta vista");
  }
};

router.get("/", logged, adminView);
router.get("/create", logged, createView);
router.post("/create", upload.array("productImages", 2), createItem);
router.get("/edit/:id", logged, editView);
router.put("/edit/:id", upload.array("productImages", 2), editItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;

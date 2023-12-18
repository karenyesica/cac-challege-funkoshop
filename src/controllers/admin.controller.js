const path = require("path");
const { getAll, getOne } = require("../models/product.model");
const categoryService = require("../services/category.service");
const licenseService = require("../services/license.service");

const adminControllers = {
  adminView: async (req, res) => {
    const data = await getAll();

    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      isLogged: true,
      data,
    });
  },
  createView: async (req, res) => {
    const categories = await categoryService.getAllCategories();
    const licenses = await licenseService.getAllLicense();
    const allProducts = await getAll();
    res.render(path.resolve(__dirname, "../views/admin/create.ejs"), {
      isLogged: true,
      categories,
      licenses,
      allProducts,
    });
  },
  createItem: (req, res) => res.send("Ruta para Crear un Item"),
  editView: async (req, res) => {
    const { id } = req.params;
    const categories = await categoryService.getAllCategories();
    const licenses = await licenseService.getAllLicense();
    const [product] = await getOne({ product_id: id });
    // console.log(categories);
    // console.log(product);
    // console.log(licenses);

    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"), {
      isLogged: true,
      product,
      categories,
      licenses,
    });
  },
  editItem: (req, res) => res.send("Ruta para Editar un Item"),
  deleteItem: (req, res) => res.send("Ruta para Eliminar un Item"),
};

module.exports = adminControllers;

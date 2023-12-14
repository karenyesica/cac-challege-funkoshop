const path = require("path");
const { getAll, getOne } = require("../models/product.model");

const adminControllers = {
  adminView: async (req, res) => {
    const data = await getAll();

    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      isLogged: true,
      data,
    });
  },
  createView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/create.ejs"), {
      isLogged: true,
    });
  },
  createItem: (req, res) => res.send("Ruta para Crear un Item"),
  editView: async (req, res) => {
    const { id } = req.params;
    const [product] = await getOne(id);

    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"), {
      isLogged: true,
      product,
    });
  },
  editItem: (req, res) => res.send("Ruta para Editar un Item"),
  deleteItem: (req, res) => res.send("Ruta para Eliminar un Item"),
};

module.exports = adminControllers;

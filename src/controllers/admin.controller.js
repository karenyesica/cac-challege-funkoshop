const path = require("path");

const adminControllers = {
  adminView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      isLogged: true,
    });
  },
  createView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/create.ejs"), {
      isLogged: true,
    });
  },
  createItem: (req, res) => res.send("Ruta para Crear un Item"),
  editView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"), {
      isLogged: true,
    });
  },
  editItem: (req, res) => res.send("Ruta para Editar un Item"),
  deleteItem: (req, res) => res.send("Ruta para Eliminar un Item"),
};

module.exports = adminControllers;

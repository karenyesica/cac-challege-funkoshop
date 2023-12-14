const path = require("path");
const { getAll, getOne } = require("../models/product.model");

const shopControllers = {
  shopView: async (req, res) => {
    const data = await getAll();

    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      isLogged: false,
      data,
    });
  },
  itemView: async (req, res) => {
    const itemId = req.params.id;
    const [item] = await getOne(itemId);
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      isLogged: false,
      item,
    });
  },
  addItem: (req, res) => res.send("Ruta para agregar un nuevo Item"),
  cartView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/cart.ejs"), {
      isLogged: false,
    });
  },
  addToCart: (req, res) => res.send("Ruta para agregar un Item al Carrito"),
};

module.exports = shopControllers;

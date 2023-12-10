const path = require("path");

const shopControllers = {
  shopView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"));
  },
  itemView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"));
  },
  addItem: (req, res) => res.send("Ruta para agregar un nuevo Item"),
  cartView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/cart.ejs"));
  },
  addToCart: (req, res) => res.send("Ruta para agregar un Item al Carrito"),
};

module.exports = shopControllers;

const path = require("path");

const shopControllers = {
  shop: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"));
  },
  item: (req, res) => res.send("Ruta para Ítem"),
  cart: (req, res) => res.send("Ruta para Carrito de Compras"),
};

module.exports = shopControllers;

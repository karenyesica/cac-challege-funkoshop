const path = require("path");
const { getAll, getOne } = require("../models/product.model");

const shopControllers = {
  shopView: async (req, res) => {
    const data = await getAll();

    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      data,
    });
  },
  itemView: async (req, res) => {
    //const itemId = req.params.id;
    const { id } = req.params;
    //const [item] = await getOne(itemId);
    const [item] = await getOne({ product_id: id });
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      item,
    });
  },
  addItem: (req, res) => res.send("Ruta para agregar un nuevo Item"),
  cartView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/cart.ejs"));
  },
  addToCart: (req, res) => res.send("Ruta para agregar un Item al Carrito"),
};

module.exports = shopControllers;

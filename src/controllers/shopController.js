const shopControllers = {
    shop:(req, res) => res.send('Ruta para Tienda'),
    item: (req, res) => res.send('Ruta para Ítem'),
    cart: (req, res) => res.send('Ruta para Carrito de Compras'),
}

module.exports = shopControllers;
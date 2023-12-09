const mainControllers = {
    home:(req, res) => res.send('Ruta para Home'),
    contact: (req, res) => (req, res) => res.send('Ruta para Contacto'),
    about: (req, res) => (req, res) => res.send('Ruta para Nosotros'),
    faqs: (req, res) => (req, res) => res.send('Ruta para Preguntas Frecuentes'),
}

module.exports = mainControllers;

const mainControllers = {
  home: (req, res) => {
    res.render("index");
  },
  contact: (req, res) => res.send("Ruta para Contacto"),
  about: (req, res) => res.send("Ruta para Nosotros"),
  faqs: (req, res) => res.send("Ruta para Preguntas Frecuentes"),
};

module.exports = mainControllers;

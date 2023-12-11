const path = require("path");

const authControllers = {
  loginView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"), {
      isLogged: false,
    });
  },
  doLogin: (req, res) =>
    res.send("Ruta para enviar los datos del fomulario para Iniciar Sesión"),
  registerView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"), {
      isLogged: false,
    });
  },
  doRegister: (req, res) =>
    res.send("Ruta para enviar los datos del fomulario para Registrarse"),
  logoutView: (req, res) =>
    res.send("Ruta para desloguearse o cierre de sesión del usuario"),
};

module.exports = authControllers;

const path = require("path");

const credentials = {
  email: "pepe@gmail.com",
  password: "pepe123",
};

const authControllers = {
  loginView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"), {
      isLogged: true,
    });
  },
  doLogin: (req, res) => {
    const { email, password } = req.body;
    const validateEmail = credentials.email == email;
    const validatePassword = credentials.password == password;

    req.session.logged = validateEmail && validatePassword ? true : false;

    if (req.session.logged) {
      res.locals.logged = true;
      return res.redirect("/admin");
    }
    return res.status(401).send("Credenciales inválidas");
  },
  registerView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"), {
      isLogged: true,
    });
  },
  doRegister: (req, res) =>
    res.send("Ruta para enviar los datos del fomulario para Registrarse"),
  logoutView: (req, res) =>
    res.send("Ruta para desloguearse o cierre de sesión del usuario"),
};

module.exports = authControllers;

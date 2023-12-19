const path = require("path");

const credentials = {
  email: "pepe@gmail.com",
  password: "pepe123",
};

const authControllers = {
  loginView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"));
  },
  doLogin: (req, res) => {
    const { email, password } = req.body;
    const validateEmail = credentials.email == email;
    const validatePassword = credentials.password == password;

    req.session.isLogged = validateEmail && validatePassword ? true : false;

    if (req.session.isLogged) {
      res.locals.isLogged = true;
      return res.redirect("/admin");
    }
    return res.status(401).send("Credenciales inválidas");
  },
  registerView: (req, res) => {
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"));
  },
  doRegister: (req, res) =>
    res.send("Ruta para enviar los datos del fomulario para Registrarse"),
  logoutView: (req, res) => {
    req.session.isLogged = false;
    res.send("Sesión finalizada");
  },
};

module.exports = authControllers;

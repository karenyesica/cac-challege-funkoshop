const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { initSession } = require("./src/middlewares/session");

/* Routes imports*/

const mainRoutes = require("./src/routes/main.routes");
const shopRoutes = require("./src/routes/shop.routes");
const adminRoutes = require("./src/routes/admin.routes");
const authRoutes = require("./src/routes/auth.routes");

/* Puerto de la aplicación */

const PORT = 3001;

/* Configuración del Template Engine - EJS */

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

/* Parsea los datos recibidos por POST */

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

/* Override para habilitar métodos PUT y DELETE */

app.use(methodOverride("_method"));

/* Carpeta de archivos estáticos */

app.use(express.static("public"));

/* Crear sesión de usuario */

app.use(initSession());

/* Usar session */

app.use((req, res, next) => {
  res.locals.isLogged = req.session.isLogged;
  next();
});

/* Middleware a las rutas */

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

/* Middleware de error 404 */

app.use((req, res) => {
  res.status(404).send("¡Ups! Error 404 Página no encontrada 😭");
});

/* Método para indicar que puerto tiene que escuchar y correr el server*/

app.listen(PORT, () =>
  console.log(`Aplicación corriendo en http://localhost:${PORT}`)
);

const authControllers = {
    login:(req, res) => res.send('Ruta para Iniciar Sesión'),
    register: (req, res) => (req, res) => res.send('Ruta para Registrarse'),
    logout: (req, res) => (req, res) => res.send('Ruta para Salir'),
}

module.exports = authControllers;
const adminControllers = {
    admin:(req, res) => res.send('Ruta para Admin'),
    create: (req, res) => (req, res) => res.send('Ruta para Crear'),
    edit: (req, res) => (req, res) => res.send('Ruta para Editar'),
    delete: (req, res) => (req, res) => res.send('Ruta para Eliminar'),
}

module.exports = adminControllers;
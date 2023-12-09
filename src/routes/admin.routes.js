const express = require('express');

const router = express.Router();

router.get('/admin', (req, res) => res.send('Esta es la vista de Admin'));
router.get('/admin/create', (req, res) => res.send('Esta es la vista de Crear'));
router.post('/admin/create', (req, res) => res.send('Esta es la vista de Crear'));
router.get('/admin/edit/:id', (req, res) => res.send('Esta es la vista de Editar'));
router.post('/admin/edit/:id', (req, res) => res.send('Esta es la vista de Editar'));
router.delete('/admin/delete/:id', (req, res) => res.send('Esta es la vista de Eliminar'));

module.exports = router;
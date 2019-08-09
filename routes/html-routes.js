const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/index.html'));
});
router.get('/index', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/index.html'));
});
router.get('/explore', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/explore.html'));
});
router.get('/auditorio', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/auditorio.html'));
});
router.get('/contactos', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/contactos.html'));
});
router.get('/diacompleto', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/diacompleto.html'));
});
router.get('/habitaciones', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/habitaciones.html'));
});
router.get('/mediodia', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/mediodia.html'));
});

router.get('/paqueteturistico', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/paqueteturistico.html'));
});

router.get('/reservaciones', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/reservaciones.html'));
});
router.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/login.html'));
});
router.get('/signup', (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/signup.html'));
});
router.get('/dashboard', (req, res) =>{
    // req.user.id
    if (req.user) {
        res.sendFile(path.join(__dirname, '/../views/dashboard.html'));
	} else {
        res.redirect('/login')
	}
});

module.exports = router;
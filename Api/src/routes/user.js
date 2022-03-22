const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js')

const getUserRol = require('../controllers/getUserRol');
const getUserId = require('../controllers/getUserId');
const getAllUsers = require('../controllers/getAllUsers');




const router = require('express').Router();


router.get('/rol', isAuthenticated, getUserRol);
router.get('/id', isAuthenticated, getUserId);
router.get('/admin', getAllUsers);

module.exports = router;


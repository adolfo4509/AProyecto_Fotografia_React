const express = require('express');
const router = express.Router();


const { createImage, uploadImage2 } = require('../controllers/createImage');
const getImageDetails = require('../controllers/getImageDetails');
const getDeletedImage = require('../controllers/deleteImage');




router.post('/', uploadImage2, createImage);

router.get('/:id', getImageDetails);
router.get('/deleted/:id', getDeletedImage);







module.exports = router;
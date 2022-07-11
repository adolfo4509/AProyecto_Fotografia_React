const { Image } = require('../db');
const multer = require('multer');


const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    const { id } = req.query;
    callback(null, '../client/src/assets/imageProduct/');

  },
  filename: (req, file, callback) => {
    const { image_product } = req.query;
    const ext = file.mimetype.split('/')[1];
    const nombre = file.originalname;
    callback(null, `img-product-${image_product}.${nombre}`);
  }

});

const upload = multer({
  storage: multerConfig,

});




exports.uploadImage2 = upload.single('img');

exports.createImage = async (req, res, next) => {

  try {

    const { image_product } = req.query;
    const namefile = req.file.originalname;

    const name = `img-product-${image_product}.${namefile}`;
    const imgInsert = await Image.create({
      name,
      image_product
    }, { include: [Product] });

    res.json(imgInsert);

  } catch (error) {
    next(error);

  }

};



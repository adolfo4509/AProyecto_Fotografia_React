const { Image } = require('../db.js')

const deleteImageProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const imagenDelete = await Image.destroy({
      where: {
        id,
      }
    });
    res.json(imagenDelete);
  }
  catch (err) {
    next(err);
  }
}

module.exports = deleteImageProduct;
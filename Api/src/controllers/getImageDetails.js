const { Image } = require('../db.js')

const getImageDetails = async (req, res, next) => {
  const { id } = req.params;
  try {
    const imageFound = await Image.findOne({
      where: {
        id,
      }
    });
    res.json(imageFound);
  }
  catch (err) {
    next(err);
  }
}

module.exports = getImageDetails;
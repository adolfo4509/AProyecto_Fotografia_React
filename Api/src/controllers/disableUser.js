const { User, Rol } = require('../db.js')

const disableUser = async (req, res, next) => {
  const { id } = req.params;
  const { enabled } = req.body;

  try {
    const disabledUser = await User.update({
      enabled: enabled,
    }, {
      where: {
        id,
      }
    });
    const allUsers = await User.findAll({
      include: {
        model: Rol
      },
      order: [
        ['id', 'ASC'],
      ]
    });
    res.json(allUsers)
  }
  catch (err) {
    next(err);
  }
}

module.exports = disableUser;
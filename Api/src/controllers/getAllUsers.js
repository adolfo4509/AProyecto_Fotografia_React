const { User, Rol } = require('../db');

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      include: {
        model: Rol
      },
      order: [
        ['id', 'ASC'],
      ]
    });
    res.json(allUsers)
  } catch (error) {
    next(error);
  }
}

module.exports = getAllUsers;
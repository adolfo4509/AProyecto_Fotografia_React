const getUserRol = (req, res, next) => {
  res.json(req.user.user_rol);
}

module.exports = getUserRol;
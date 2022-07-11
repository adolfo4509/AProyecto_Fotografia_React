const getUserProfile = (req, res, next) => {
  const { name, email, user_rol, id } = req.user;
  const userInfo = {
    name,
    email,
    user_rol,
    id,
  };
  res.json(userInfo);
}

module.exports = getUserProfile;
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({
      message: 'You must login to access this resource',
      response: false,
    })
  }
}

exports.isUnauthenticated = (req, res, next) => {
  if (req.isUnauthenticated()) {
    next()
  } else {
    res.status(401).json({
      message: 'You are already logged',
      response: false,
    })
  }
}

exports.isAdmin = (req, res, next) => {
  if (req.user.user_rol === 2 || req.user.user_rol === 1) {
    next();
  } else {
    res.status(401).json({
      message: 'You must be admin to access this resource',
      response: false,
    })
  }
}

exports.isSuperAdmin = (req, res, next) => {
  if (req.user.user_rol === 1) {
    next();
  } else {
    res.status(401).json({
      message: 'You must be superAdmin to access to this resource',
      response: false,
    });
  }
}
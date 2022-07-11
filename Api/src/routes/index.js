const router = require('express').Router();
const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js')






const imageRouter = require('./image');
const userRouter = require('./user');













router.use('/image', imageRouter);
router.use('/user', userRouter);








module.exports = router;
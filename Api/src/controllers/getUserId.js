const getUserId = (req,res,next) => {
	const { id, googleId } = req.user;
	res.json({
		id,
		googleId,
	})
}

module.exports = getUserId;
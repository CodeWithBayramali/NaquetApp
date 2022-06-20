const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    try {
      jwt.verify(authHeader, process.env.SECRET_KEY,(err,decodedAccessToken)=> {
        if(err) return res.status(403).json(err)
        req.userId = decodedAccessToken?.id
        next();
    }) 
    } catch (error) {
     console.log(error)
    }
  }
};
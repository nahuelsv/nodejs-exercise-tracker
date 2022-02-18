const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    if (req.header && req.header.auth && req.header.auth.split[0] === "JWT") {
        jwt.verify(req.header.auth.split[1], process.env.JWT_SECRET, (err, decode) => {
            if (err) return res.status(401).send()
            req.user = decode;
            console.log('authenticated as ', decoded.username)
            next()
        })
    } else {
        return res.status(401).send()
    }
}
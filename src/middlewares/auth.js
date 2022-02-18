const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "jwt") {
        jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET, (err, decode) => {
            if (err) return res.status(401).send()
            req.body.user = { username: decode.username }
            console.log('authenticated as ', req.body.user)
            next()
        })
    } else {
        return res.status(401).send()
    }
}
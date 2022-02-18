const get = (req, res, next) => {
    res.send("Get works")
}

const post = (req, res, next) => {
    res.send("Post works")
}

module.exports = {
    get, 
    post
}
const errorHandler = require('errorhandler')
require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require("./src/routes");
const mongoose = require('mongoose')

mongoose.connect(process.env["MONGO_URI"], {useNewUrlParser: true})
.then(() => console.log(`Connection Succesful`))
.catch(err => console.log(`Error in DB connection`, err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: "false" }))
app.use(bodyParser.json())

app.get("/", (req, res, next) => {
    res.send("Hello")
});

app.use("/api/", router);

if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler({
        dumpExceptions: true,
        showStack: true
    }))
}else if (process.env.NODE_ENV === 'production') {
    app.use(errorHandler())
}  

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on ${listener.address().port}`)
});
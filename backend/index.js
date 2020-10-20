const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const logger = require("morgan")
const port = process.env.PORT || 3001

const app = express()

app.use(logger("dev"))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

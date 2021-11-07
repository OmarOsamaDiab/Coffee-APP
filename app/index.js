require("dotenv").config()
const express = require('express')
const app = express()

app.use(express.json())
app.use('/coffee', require('./routes/router'))

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

module.exports = server
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.static(__dirname + "/build"))

app.get('/api', (req, res) => {
    res.json({
        age: 19,
        name: 'Giovani'
    })
})
app.listen(PORT, () => {
    console.log(`server start on ${PORT}`)
})
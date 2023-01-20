const express = require('express')
const app = express()
const port = process.env.port || 5000
const cors = require('cors')

app.use(cors())

app.get('/api', (req, res) => {
    res.json({
        age: 19,
        name: 'Giovani'
    })
})
app.listen(port, () => {
    console.log(`server start on ${port}`)
})
// to create a rest api having get, post 

const express = require('express')
const app = express()
const port = 3008

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/profile', (req, res) => {
    res.send('Hello Unity!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
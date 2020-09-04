'use strict'

const express = require('express')
const path = require('path')

const app = express()
const port = 80

app.use(express.static(path.join(__dirname, 'public')))

app.get('/aha', (req, res) => {
  res.send('Aha!')
})

app.listen(port, () => {
  console.log(`The application listening at http://localhost:${port}.`)
})

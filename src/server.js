const express = require('express')
const app = express()
const apiRouter = require('./api.router')
const redirectRouter = require('./redirect.router')

app.use(express.json());

// links need to be stored somewhere, in this simple app they are store in memory within the
// express app. In a production app this would need to be some sort of persistent store e.g. 
// a DB or file
app.links = {}

app.use('/api/v1', apiRouter)
app.use('', redirectRouter)

module.exports = app
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

// links need to be stored somwhere, in this simple app they are store in memory within the
// express app. In a production add this would need to be some sort of persistent store e.g. 
// a DB or similar
app.links = {}

app.get('/:code', (req, res) => {
  const link = req.app.links[req.params.code]
  res.redirect(link.target)
})

app.post('/api/v1/links', (req, res) => {
  req.app.links[req.body.code] = req.body
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Abridged listening at http://localhost:${port}`)
})

module.exports = app
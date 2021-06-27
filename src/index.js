const express = require('express')
const { v4 } = require('uuid');
const app = express()
const port = 3000

app.use(express.json());

// links need to be stored somwhere, in this simepl app they are store in memory within the
// express app. In a production add this would need to be some sort of persistent store e.g. 
// a DB or similar
app.links = {}

app.post('/api/v1/links', (req, res) => {
  const id = v4()
  req.app.links[id] = {id, ...req.body}
  res.send(req.app.links[id])
})

app.listen(port, () => {
  console.log(`Abridged listening at http://localhost:${port}`)
})

module.exports = app
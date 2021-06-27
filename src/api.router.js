var express = require('express')
var router = express.Router()

router.post('/links', (req, res) => {
  req.app.links[req.body.code] = req.body
  res.send(req.body)
})

module.exports = router
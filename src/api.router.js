const express = require('express')
const router = express.Router()
const validUrl = require('valid-url');


// we wouldnt want some codes to be created for security reasons.
// this list is not exhaustive!
const bannedCodes = [
  'api',
  'robots.txt'
]

router.post('/links', (req, res) => {

  if(!req.body.code || bannedCodes.includes(req.body.code)) {
    res.status(400).send({error: 'invalid code'})
  }
  if(!req.body.target || !validUrl.isUri(req.body.target)) {
    res.status(400).send({error: 'invalid target'})
  }

  req.app.links[req.body.code] = req.body
  res.status(201).send(req.body)
})

module.exports = router
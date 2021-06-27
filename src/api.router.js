const express = require('express')
const router = express.Router()
const validUrl = require('valid-url');
const codes = require('./codes')




router.post('/links', (req, res) => {

  let code = req.body.code
  let existingCodes = Object.keys(req.app.links)
  if(code) {
    if(!codes.validate(code, existingCodes)) {
      res.status(400).send({error: 'invalid code'})
    }
  } else {
    code = codes.generate(existingCodes)
  }
  
  if(!req.body.target || !validUrl.isUri(req.body.target)) {
    res.status(400).send({error: 'invalid target'})
  }

  req.app.links[code] = {target: req.body.target, code}
  res.status(201).send(req.app.links[code])
})

module.exports = router
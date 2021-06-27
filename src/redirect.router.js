const express = require('express')
const router = express.Router()

// only redirects get requests for now, Would need to consider if this is enough.
router.get('/:code', (req, res) => {
  const link = req.app.links[req.params.code]
  if(link) {
    res.redirect(link.target)
  } else {
    res.sendStatus(404)
  }
  
})

module.exports = router
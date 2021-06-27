
const abridged = require('./server')
const port = 3000

abridged.listen(port, () => {
  console.log(`Abridged listening at http://localhost:${port}`)
})
const nanoid = require('nanoid')

// we wouldnt want some codes to be created for security reasons.
// this list is not exhaustive!
const bannedCodes = [
    'api',
    'robots.txt'
]

const idGenerator = nanoid.customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 6)

const generate = (existingCodes) => {
  // This would infinitely loop if it couldnt find a free code, this shoud be replaced with
  // 1) something that is async and doesent tie up the CPU.
  // 2) something that generates longer codes if the existing code space is full.
  // 3) something that generates friendlier codes rather than just random ones
  while(true) {
    let id = idGenerator()
    if(!existingCodes.includes(id)){
      return id
    } 
  }
}

const validate = (code, existingCodes) => {
  return !bannedCodes.includes(code) && !existingCodes.includes(code)
}

module.exports = {
    generate,
    validate
}
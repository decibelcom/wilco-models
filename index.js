const vm = require('vm')
const fs = require('fs')
const path = require('path')

let m = {}

const dir = path.join(__dirname, 'models')
const models = fs.readdirSync(dir)
models.forEach((model, i) => {
  file = path.join(dir, model)
  name = path.basename(file, '.js')
  capitalized = name.charAt(0).toUpperCase() + name.slice(1)
  data = fs.readFileSync(file, 'utf8')

  m[capitalized] = data
  console.log(file)
})

module.exports = m

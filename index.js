const vm = require('vm')
const fs = require('fs')
const path = require('path')

let m = {}

const dir = './models';
const models = fs.readdirSync(dir)
models.forEach((model, i) => {
  file = path.join(dir, model)
  name = path.basename(file, '.js')
  capitalized = name.charAt(0).toUpperCase() + name.slice(1)
  data = fs.readFileSync(file, 'utf8')

  m[capitalized] = (Parse) => {
    return eval(data)
  }
})

console.log(m)

module.exports = m

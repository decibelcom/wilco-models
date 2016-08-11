const vm = require('vm')
const fs = require('fs')
const path = require('path')

let m = {}

const build = (mdata) => {
  const src_dir = path.join(__dirname, 'src')

  if (!fs.existsSync(src_dir)) fs.mkdirSync(src_dir)

  let loaderarr = []
  let bundlearr = []
  mdata.forEach((model, i) => {
    const file = path.join(src_dir, model.name.concat('.js'))
    fs.writeFileSync(file, model.content)

    bundlearr.push(model.content)
    loaderarr.push(`var ${model.capitalized} = Parse.Object.extend('${model.capitalized}', ${model.objname})`)
  })

  const loader = loaderarr.join('\n')
  const loader_path = path.join(src_dir, 'loader'.concat('.js'))
  fs.writeFileSync(loader_path, loader)

  bundlearr.push(loader)
  const bundle = bundlearr.join('\n')
  const bundle_path = path.join(src_dir, 'bundle'.concat('.js'))
  fs.writeFileSync(bundle_path, bundle)
}

const start = (b = true) => {
  const models_dir = path.join(__dirname, 'models')
  const models = fs.readdirSync(models_dir)

  let mdata = []
  models.forEach((model, i) => {
    const file = path.join(models_dir, model)
    const name = path.basename(file, '.js')
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1)
    const data = fs.readFileSync(file, 'utf8')

    const objname = '_'.concat(name, '_obj')
    mdata.push({
      name,
      capitalized,
      objname,
      content: data.replace('module.exports', objname)
    })

    m[capitalized] = require(file)
  })

  m.mdata = mdata

  if(b) build(mdata, m)
}

m.parsed = (Parse) => {
  let result = {}

  m.mdata.forEach((model, i) => {
    result[model.capitalized] = Parse.Object.extend(model.capitalized, m[model.capitalized])
  })

  return result
}

start()

module.exports = m

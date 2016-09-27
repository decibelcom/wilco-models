module.exports = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['code', 'alpha2', 'alpha3', 'name']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_parameter_obj = {
  defaults: {
    hidden: true
  },

  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['key', 'hidden', 'beautify', 'string', 'number', 'object']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

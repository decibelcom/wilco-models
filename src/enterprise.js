_enterprise_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['name', 'owner']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_permissionRequest_obj = {
  defaults: {
    accepted: false,
    treated: false
  },

  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['user', 'accepted', 'treated']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

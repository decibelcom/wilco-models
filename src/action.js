_action_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['service', 'description', 'amount', 'user', 'invoice', 'pristine']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

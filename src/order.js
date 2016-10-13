_order_obj = {
  defaults: {
    refunded: false
  },

  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['service', 'description', 'amount', 'charge', 'user', 'refunded', 'validated', 'rows']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

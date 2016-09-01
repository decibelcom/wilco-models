_card_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['iccid', 'onum', 'inum', 'owner', 'locked']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_offer_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return
    
    var props = ['name', 'price']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_order_obj = {
  defaults: {
    refunded: false
  },

  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['service', 'description', 'amount', 'charge', 'user', 'refunded']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_parameter_obj = {
  defaults: {
    hidden: true
  },

  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['key', 'val', 'hidden', 'beautify']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

var Card = Parse.Object.extend('Card', _card_obj)
var Offer = Parse.Object.extend('Offer', _offer_obj)
var Order = Parse.Object.extend('Order', _order_obj)
var Parameter = Parse.Object.extend('Parameter', _parameter_obj)
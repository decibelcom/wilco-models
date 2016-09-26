_action_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['service', 'description', 'amount', 'user', 'invoice', 'pristine']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_card_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['iccid', 'onum', 'inum', 'raw_balance', 'balance', 'owner', 'blocked', 'booked']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_enterprise_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['name', 'owner']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_invoice_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['total', 'user']

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

    var props = ['service', 'description', 'amount', 'charge', 'user', 'refunded', 'validated']

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

    var props = ['key', 'hidden', 'beautify', 'string', 'number', 'object']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_project_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['name', 'canonical_name', 'enterprise']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_rate_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['country', 'inbound', 'outbound', 'one_sim_card_to_one_sim_card_first_minute', 'one_sim_card_to_one_sim_card_next_minutes', 'outbound_sms', 'discount_sms', 'travel_sms', 'inbound_sms']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

var Action = Parse.Object.extend('Action', _action_obj)
var Card = Parse.Object.extend('Card', _card_obj)
var Enterprise = Parse.Object.extend('Enterprise', _enterprise_obj)
var Invoice = Parse.Object.extend('Invoice', _invoice_obj)
var Offer = Parse.Object.extend('Offer', _offer_obj)
var Order = Parse.Object.extend('Order', _order_obj)
var Parameter = Parse.Object.extend('Parameter', _parameter_obj)
var Project = Parse.Object.extend('Project', _project_obj)
var Rate = Parse.Object.extend('Rate', _rate_obj)
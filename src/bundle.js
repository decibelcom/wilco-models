_card_obj = {
  initialize: function (attrs, options) {
    this.iccid = attrs.iccid
    this.onum = attrs.onum
    this.user = attrs.user || null
    this.owner = attrs.owner || null
  }
}

_offer_obj = {
  initialize: function (attrs, options) {
    this.name = attrs.name
    this.price = attrs.price
  }
}

_parameter_obj = {
  initialize: function (attrs, options) {
    this.key = attrs.key
    this.val = attrs.val
    this.hidden = attrs.hidden || true
    this.beautify = attrs.beautify || ''
  }
}

Card = Parse.Object.extend('Card', _card_obj)
Offer = Parse.Object.extend('Offer', _offer_obj)
Parameter = Parse.Object.extend('Parameter', _parameter_obj)
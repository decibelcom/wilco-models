var Offer = Parse.Object.extend('Offer', {
  initialize: function (attrs, options) {
    this.name = attrs.name
    this.price = attrs.price
  }
})

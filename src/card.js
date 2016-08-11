_card_obj = {
  initialize: function (attrs, options) {
    this.iccid = attrs.iccid
    this.onum = attrs.onum
    this.user = attrs.user || null
    this.owner = attrs.owner || null
  }
}

_parameter_obj = {
  initialize: function (attrs, options) {
    this.key = attrs.key
    this.val = attrs.val
    this.hidden = attrs.hidden || true
    this.beautify = attrs.beautify || ''
  }
}

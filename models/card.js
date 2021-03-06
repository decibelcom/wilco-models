module.exports = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['iccid', 'onum', 'inum', 'raw_balance', 'balance', 'owner', 'blocked', 'booked']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

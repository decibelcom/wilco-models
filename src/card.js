_card_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['iccid', 'onum', 'inum', 'owner', 'locked']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

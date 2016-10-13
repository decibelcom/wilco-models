_item_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['sellsy_id', 'name', 'notes', 'ref', 'enabled', 'taxid']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

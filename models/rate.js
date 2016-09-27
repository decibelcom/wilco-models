module.exports = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['country', 'standard_rates', 'plus_rates', 'data_roam_rates', 'europe_more_rates']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

_rate_obj = {
  initialize: function (attrs, options) {
    if(!attrs) return

    var props = ['country', 'inbound', 'outbound', 'one_sim_card_to_one_sim_card_first_minute', 'one_sim_card_to_one_sim_card_next_minutes', 'outbound_sms', 'discount_sms', 'travel_sms', 'inbound_sms']

    for(var i = 0; i < props.length; i++)
      if(attrs[props[i]]) this[props[i]] = attrs[props[i]]
  }
}

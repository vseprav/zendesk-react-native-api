let request = require('./request');

var Tickets = function(config){
  return {
    list:function() {
      return request.get(config.url, config.auth_tocken);
    }
  };
};

module.exports = Tickets;

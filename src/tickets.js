let request = require('./request');

let Tickets = function(config, entity){

  return {
    list:function() {
      return request.get(config.url  + '/' +  entity.plural + '.json', config.auth_tocken);
    }
  };
};

module.exports = Tickets;

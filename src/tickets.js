let request = require('./request');

let Tickets = function(config, entity){

  return {
    list:function() {
      return request.get(config.url  + '/' +  entity.plural + '.json', config.auth_tocken);
    },
    create:function (data) {
      return request.post(config.url  + '/' +  entity.plural + '.json', config.auth_tocken, data);
    }
  };
};

module.exports = Tickets;
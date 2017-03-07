let Buffer = require('buffer/').Buffer;

function ZendeskApi(config){
  config.auth_tocken = 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64');

  return {
    tickets: require('./tickets')(config, { single:'ticket', plural:'tickets'})
  }
}

module.exports = ZendeskApi;

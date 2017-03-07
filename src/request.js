let request = {
  get:function(uri, auth_tocken) {
    return fetch(uri, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': auth_tocken
          }
        })
  }

}
module.exports = request;

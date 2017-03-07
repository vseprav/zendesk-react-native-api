let request = {
  get:function(url, auth_tocken) {
    return fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + auth_tocken
          }
        })
  }

}
module.exports = request;

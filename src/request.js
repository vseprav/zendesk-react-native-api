let request = {
  get:function(uri, auth_tocken) {
    return fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth_tocken
      }
    })
  },
  post:function (uri, auth_tocken, data) {
    return fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth_tocken
      },
      body: JSON.stringify(data)
    })
  }

};

module.exports = request;

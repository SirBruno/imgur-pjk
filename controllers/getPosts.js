const axios = require('axios');

module.exports = {
  getData(req, res) {
    axios.get('https://api.imgur.com/3/gallery/r/gaming/top/week/1', {
      headers: {
        'Authorization': 'Client-ID *****'
      }
    }).then(response => {
      res.send(response.data);
    });
  }
}
const axios = require('axios');

module.exports = {
  getData(req, res) {
    axios.get('https://api.imgur.com/3/gallery/r/gaming/top/week/1', {
      headers: {
        'Authorization': 'Client-ID 6c35145e87e788f'
      }
    }).then(response => {
      console.log(response.data);
      res.send(response.data)
    });
  }
}
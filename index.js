const axios = require("axios");
const https = require("http");
const options = {
  method: 'GET',
  url: 'https://api.nasa.gov/planetary/apod?api_key=MFSQyOO8csPcPqMjTUU0Aq0hXCqeKjMKMlTSqO8m',
};
var count = 0;
https.createServer(function (req, res) {
  axios.request(options).then(function (response) {  
      res.end(response.data.url);
    })
    count++;
    console.log('No. of request = '+count);
}).listen(8082);
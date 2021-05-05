const axios = require('axios');
const config = require('./config');

axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.news_API_key}`)
    .then((res) => {
        console.log(res.data.articles[0]);
    })
    .catch((err) => {
        console.log("Error retrieving data: " + err);
    });
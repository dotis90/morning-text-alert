const axios = require('axios');
const config = require('../config');

const news = () => {
    let data;
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.news_API_key}`)
    .then((res) => {
        //console.log(res.data.articles);
        data = res.data.articles;
        console.log(data);
    })
    .catch((err) => {
        console.log("Error retrieving data: " + err);
    });
}

module.exports = news;
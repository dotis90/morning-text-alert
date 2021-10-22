const axios = require('axios');
const config = require('../config');

const news = async () => {

    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.news_API_key}`)
    return response; 
  
}

module.exports = news;
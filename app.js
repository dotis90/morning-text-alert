const axios = require('axios');
const date = require('./utils/date')
const config = require('./config');

const { dayOfTheWeek, day, month, year } = date();

axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.news_API_key}`)
    .then((res) => {
        console.log(res.data.articles);
    })
    .catch((err) => {
        console.log("Error retrieving data: " + err);
    });

console.log(`${dayOfTheWeek} ${month} ${day}, ${year}`);
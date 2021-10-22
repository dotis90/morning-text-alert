const axios = require('axios');
const twilio = require('twilio');
const config = require('./config');

(async () => {

    // Date

    const todaysDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const todaysDateString = todaysDate.toLocaleDateString("en-US", options)

    let message = `Good morning!\n\nToday is ${todaysDateString}\n\nHere's the top stories this morning:\n\n`

    // News

    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.news_API_key}`)

    let topStories = news.data.articles.slice(0, config.news_filter_amt)

    topStories.forEach((item) => {
        message += `${item.title}\n${item.url}\n\n`
    })

    // Sending text

    const accountSid = config.TWILIO_ACCOUNT_SID 
    const authToken = config.TWILIO_AUTH_TOKEN
    const client = new twilio(accountSid, authToken);

    client.messages
    .create({
        body: message,
        to: config.target_phone_number, 
        from: config.source_phone_number, 
    })
    .then((message) => console.log(message.sid));
})()
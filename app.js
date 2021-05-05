const date = require('./utils/date')
const news = require('./utils/news')

const { dayOfTheWeek, day, month, year } = date();

console.log(`${dayOfTheWeek} ${month} ${day}, ${year}`);

news();
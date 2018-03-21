const Twit = require('twit');
const config = require('./config');

const bot = new Twit(config);

bot.post('statuses/update', { status: 'I am a twitter bot! I update my status every day! Today\'s random number is '+Math.random() }, function(err, data, response) {
  console.log(data);
});
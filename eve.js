const scraperjs = require('scraperjs');
const notifier = require('node-notifier');

const eve = {
  showMessage: async () => {
    const tweet = await scrapeTweet('tinycarebot');
    notifier.notify(tweet);
  }
}

const scrapeTweet = async who => {
  const uri = 'https://twitter.com/' + who;
  const scrapeFn = $ => {
    const nodes = $('.js-tweet-text.tweet-text');
    return nodes.map((x, y) => {
      const emoji = $(y).find('img').attr('alt');
      const text = $(y).text();
      return emoji + text;
    }).get()
  }

  const tweets = await scraperjs.StaticScraper.create(uri).scrape(scrapeFn);
  const tweetNo = Math.floor(Math.random() * tweets.length);
  return tweets[tweetNo];
}

module.exports = eve;

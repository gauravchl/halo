const Notification = require('electron').Notification;
const scraperjs = require('scraperjs');
const path = require('path');
const imagesPath = path.join(__dirname, 'images')

const eve = {
  showMessage: async () => {
    const tweet = await scrapeTweet('tinycarebot');
    const notify = new Notification({
      title: "EVA",
      body: tweet,
      closeButtonText: "close"
    });
    notify.show();
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

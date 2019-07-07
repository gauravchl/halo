const scraperjs = require('scraperjs');
const notifier = require('node-notifier');
const path = require('path');
const imagesPath = path.join(__dirname, 'images')

const eve = {
  showMessage: async () => {
    const tweet = await scrapeTweet('tinycarebot');
    notifier.notify({
    title: "EVA",
    subtitle: void 0,
    contentImage: void 0,
    icon: `${imagesPath}/oh@2x.png`,
    message: tweet,
    sound: true,
    timeout: 30
  });
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

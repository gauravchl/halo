const Notification = require("electron").Notification;
const scraperjs = require("scraperjs");
const path = require("path");
const imagesPath = path.join(__dirname, "images");

const halo = {
  showMessage: async () => {
    const { emoji, text } = await getTweet();
    const notify = new Notification({
      title: emoji || "Halo",
      body: text,
      closeButtonText: "close"
    });
    notify.show();
  }
};

const getTweet = async () => {
  const tweets1 = await scrapeTweets("tinycarebot");
  const tweets2 = await scrapeTweets("selfcare_bot");
  const tweets = [...tweets1, ...tweets2];
  const tweetNo = Math.floor(Math.random() * tweets.length);
  return tweets[tweetNo];
};

const scrapeTweets = who => {
  return new Promise((resolve, reject) => {
    const uri = "https://twitter.com/" + who;
    const scrapeFn = $ => {
      const nodes = $(".js-tweet-text.tweet-text");
      return nodes
        .map((x, y) => {
          const emoji = $(y)
            .find("img")
            .attr("alt");
          let text = $(y).text();
          text = text.replace(":", "").trim();
          text = text.charAt(0).toUpperCase() + text.slice(1);
          return { emoji, text };
        })
        .get();
    };
    const tweets = scraperjs.StaticScraper.create(uri).scrape(scrapeFn).then(tweets => {
      resolve(tweets)
    }).catch(err => {
      resolve(TWEETS)
    });
  })
};

module.exports = halo;


// If there is no internet, Will use hardcoded tweets
const TWEETS = [
  { emoji: "🌃", text: "Take a moment to rest your eyes please" },
  { emoji: "💖", text: "Remember to text a friend please" },
  { emoji: "💧", text: "Take a bit of time to go get a sip of water please" },
  { emoji: "💙", text: "Please ask your friends for help if you need it" },
  { emoji: "❤", text: "Please remember to say hi to your friends" },
  {
    emoji: "🏔",
    text: "Dont forget to rest your eyes and look away from twitter please"
  },
  {
    emoji: "💧",
    text: "Remember to take a little bit of time to stay hydrated please"
  },
  { emoji: "🌿", text: "Please remember to breathe calmly" },
  { emoji: "🙌", text: "Please remember to wiggle your toes" },
  { emoji: "🍛", text: "Please remember to eat something healthy" },
  { emoji: "🌃", text: "Please remember to give your eyes a break" },
  { emoji: "🚰", text: "Please remember to have a sip of water" },
  { emoji: "🙌🏽", text: "Remember to do a posture check please" },
  {
    emoji: "💟",
    text:
      "Remember to take a quick second to send some messages to your friends please"
  },
  { emoji: "🌿", text: "Get some fresh air please" },
  {
    emoji: "🏔",
    text:
      "Please dont forget to take a quick second to spend some time outside if you can"
  },
  {
    emoji: "🌿",
    text: "Dont forget to take a quick break to get some fresh air please"
  },
  { emoji: "💟", text: "Please ask for help if you need it" },
  { emoji: "🍃", text: "Please get some fresh air" },
  {
    emoji: "🎧",
    text:
      "Remember to take a quick second to listen to some music that helps you feel safe please"
  },
  { emoji: "💪", text: "Hey! Life is tough, but so are you!" },
  {
    emoji: "📋",
    text:
      "If you have an action plan to manage any conditions you have, please remember to follow it."
  },
  {
    emoji: "🌄",
    text:
      "You cannot compare your successes to the apparent achievements of others."
  },
  { emoji: "💨", text: "Don't forget to breathe." },
  {
    emoji: "💨",
    text:
      "Is your breathing steady? Maybe try breathing with this gif. http//gph.is/2bComij?tc=1"
  },
  {
    emoji: "📋",
    text: "If work is feeling too overwhelming, break it down into little jobs."
  },
  {
    emoji: "👍",
    text:
      "Not sure how to meditate? Maybe download a mindfulness app for your phone!"
  },
  {
    emoji: "⏰",
    text:
      "Have you been waking up early enough lately? Might be time to adjust your sleep schedule."
  },
  {
    emoji: "🏡",
    text:
      "Is it possible to open a window? A breeze might make you feel a little brighter."
  },
  { emoji: "💧", text: "Have at least a little sip of water, yeah?" },
  { emoji: "👍", text: "Just keep going! You're doing really well." },
  { emoji: "👍", text: "Just do your best—it's the best you can do!" },
  { emoji: "💖", text: "Don't be too hard on yourself." },
  { emoji: "🎨", text: "Don't forget to do something creative today." },
  {
    emoji: "🍰",
    text: "It's okay to treat yourself with your favourite food sometimes."
  },
  {
    emoji: "💕",
    text:
      "Everybody needs something a little different. Just be in tune with yourself."
  },
  {
    emoji: "🌲",
    text: "Have you been outside recently? Go and take a nice, fresh breath."
  },
  {
    emoji: "💤",
    text:
      "How's your sleep schedule looking? Try to head to bed on time tonight, if you can."
  },
  {
    emoji: "🚶",
    text:
      "If you have a moment, maybe go for a nice walk (or head outside for some fresh air, however you can)."
  },
  {
    emoji: "🍇",
    text: "It's really important that you feed yourself, even a little!"
  },
  { emoji: "😀", text: "Make sure you brush your teeth!" }
];

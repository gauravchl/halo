const URL =  `https://cors-anywhere.herokuapp.com/https://twitter.com/`;
const tweets = {
  get: async (who) => {
    const tweets = [];
    const res = await fetch(URL + who);
    const text = await res.text();
    const wrapper = document.createElement("div");
    wrapper.innerHTML = text;
    const tweetsEle = wrapper.querySelectorAll('.js-tweet-text.tweet-text')
    tweetsEle.forEach(n => tweets.push(n.innerText))
    return tweets
  }

}

export default tweets

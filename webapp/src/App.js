import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tweets from './components/Tweets.js'
///Users/om/repos/halo/webapp/src/components/tweets.js

function App() {
  return (
    <div className="App">
      <Tweets />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>



      </header>
    </div>
  );
}

export default App;



//ress = await fetch('https://cors-anywhere.herokuapp.com/https://twitter.com/gauravchl')

//
// var url =  `https://cors-anywhere.herokuapp.com/https://twitter.com/`;
// const scrapeTweets = async who => {
//   const tweets = [];
//   const res = await fetch(url + who);
//   const text = await res.text();
//   let wrapper = document.createElement("div");
//   wrapper.innerHTML = text;
//   const tweetsEle = wrapper.querySelectorAll('.js-tweet-text.tweet-text')
//   tweetsEle.forEach(n => tweets.push(n.innerText))
//   return tweets
// };
//
// scrapeTweets('gauravchl')

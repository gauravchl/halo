import React, { useEffect, useState } from "react";
import TweetCard from "./tweetCard";
import tweetsAPI from "../api/tweets";

const Tweets = props => {
  const [tweets, setTweets] = useState();

  useEffect(() => {
    const who = 'gauravchl';
    tweetsAPI.get(who).then(res => {
      setTweets(res.map(t => ({tweet: t, who})));
    });
  }, []);

  return <div>{tweets && tweets.map(t => <TweetCard tweet={t} />)}</div>;
};

export default Tweets;

import React, { useEffect, useState } from 'react';
import tweetsAPI from '../api/tweets'

const Tweets = (props) => {

  const [tweets, setTweets] = useState();

  useEffect(() => {
    tweetsAPI.get('gauravchl').then(res => {
      console.log(res);
      setTweets(res);
    });
  }, [])

  return (
    <div>
    { tweets && tweets.map(t => <p>{t}</p>)}
    </div>
  )

}

export default Tweets

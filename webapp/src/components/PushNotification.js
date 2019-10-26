import React from "react";
import SWN from 'simple-web-notification';
import Tweets from '../api/tweets'

console.log(SWN)


const PushNotification = props => {
  const enablePush = async () => {
    const tweets = await Tweets.get('tinycarebot');
    const  tweet = tweets[Math.round(Math.random() * tweets.length)]
    console.log(tweet)
    SWN.showNotification('tinycarebot', { body: tweet});
  }


  return (
    <div>
      <p>
        Would like to use HALO but don't prefer installing an app? <br/>
        No worries, You can click whoop! whoop! button below and halo will send notifications straight away!
      </p>

      <button onClick={enablePush}>
       Whoop! Whoop!
      </button>


    </div>
  );
};

export default PushNotification;
